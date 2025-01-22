let chatSocket;

function startChat(userId) {
    const roomName = `room_${userId}`;
    chatSocket = new WebSocket(`ws://${window.location.host}/ws/chat/${roomName}/`);

    chatSocket.onmessage = function (e) {
        const data = JSON.parse(e.data);
        const messageList = document.getElementById('message-list');
        const newMessage = document.createElement('div');
        newMessage.textContent = `${data.sender}: ${data.message}`;
        messageList.appendChild(newMessage);
    };

    chatSocket.onclose = function () {
        console.error('Chat socket closed unexpectedly');
    };

    document.getElementById('message-form').onsubmit = function (e) {
        e.preventDefault();
        const inputBox = document.getElementById('message-input');
        const message = inputBox.value;
        inputBox.value = '';
        chatSocket.send(JSON.stringify({
            'message': message,
            'recipient_id': userId
        }));
    };
}
