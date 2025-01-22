import React, { useEffect, useState } from 'react';
import Rightbar from "./rightside"; 

const Middlecontent = () => {
  const [scale, setScale] = useState(1); // Default scale is 100%

  // Function to adjust the scale based on screen width
  const adjustScale = () => {
    const width = window.innerWidth;
    let newScale = 1;

    if (width >= 992 && width <= 1600) {
      newScale = 0.9; // Shrink to 90%
    } else if (width >= 700 && width <= 767) {
      newScale = 0.8; // Shrink to 80%
    } else if (width >= 600 && width < 700) {
      newScale = 0.75; // Shrink to 75%
    } else if (width <= 600) {
      newScale = 0.5; // Shrink to 50%
    }

    setScale(newScale);
  };

  // Set up event listener on mount
  useEffect(() => {
    adjustScale(); // Initial check
    window.addEventListener('resize', adjustScale); // Listen for resize events

    return () => {
      window.removeEventListener('resize', adjustScale); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="flex mt-28"
      style={{
        transform: `scale(${scale})`, 
        transformOrigin: 'top left', 
        width: '100%', 
      }}
    >
      {/* Main Content Area */}
      <div style={{ flex: 10000, margin: '1rem' }}>
        <h1>
          Technology has revolutionized the way we live, work, and interact with the world around us. Over the past few decades, advances in computing, communication, and automation have reshaped industries, streamlined operations, and transformed our daily lives. The internet has become a vital part of our existence, connecting billions of people across the globe and enabling instant communication, information sharing, and collaboration. Mobile technology has further amplified this connectivity, putting powerful tools and resources in the hands of individuals. Meanwhile, artificial intelligence (AI) and machine learning are unlocking unprecedented potential in areas like healthcare, education, and business. AI-powered applications can diagnose diseases more accurately, personalize learning experiences, and optimize supply chains with remarkable efficiency. Cloud computing has made it possible for businesses and individuals to access data and applications from anywhere, fostering flexibility and scalability. Moreover, the emergence of blockchain technology is revolutionizing how we think about security, transparency, and trust in transactions. Despite these advancements, technology also poses challenges that must be addressed. Issues like data privacy, cybersecurity threats, and the ethical implications of AI demand careful consideration and regulation. Additionally, the digital divide remains a critical problem, with millions of people lacking access to essential technological tools and resources. To ensure technology benefits everyone, we must prioritize inclusivity, education, and sustainable development. Looking ahead, innovations such as quantum computing, 5G connectivity, and renewable energy technologies promise to shape the future even further. These advancements could solve complex problems, improve global communication, and combat environmental challenges. Ultimately, technology is not just a tool; it is a catalyst for progress. When used responsibly, it has the power to improve lives, bridge gaps, and create a more equitable and prosperous world for future generations.
        </h1>
      </div>

      {/* Right Sidebar */}
      <div
        style={{
          flex: 1, // 1 part of the total 5 (20%)
        }}
      >
        <Rightbar />
      </div>
    </div>
  );
};

export default Middlecontent;
