from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .forms import SignupForm, LoginForm
from .models import User, Message

def signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            login(request, user)
            return redirect('chat')
    else:
        form = SignupForm()
    return render(request, 'chat/signup.html', {'form': form})

def login_view(request):
    if request.method == "POST":
        form = LoginForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('chat')
    else:
        form = LoginForm()
    return render(request, 'chat/login.html', {'form': form})

@login_required
def chat_view(request):
    users = User.objects.exclude(id=request.user.id)
    return render(request, 'chat/chat.html', {'users': users})

@login_required
def get_messages(request, recipient_id):
    recipient = User.objects.get(id=recipient_id)
    messages = Message.objects.filter(
        sender__in=[request.user, recipient],
        recipient__in=[request.user, recipient]
    ).order_by('timestamp')
    return render(request, 'chat/messages.html', {'messages': messages, 'recipient': recipient})
