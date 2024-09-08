import React, { useState } from 'react';
import './Chatbot.css';  // Optional: For custom styles

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Predefined responses for the chatbot
  const botResponses = {
    "hello": "Hi there! How can I help you today?",
    "events": "We have an upcoming hackathon event this month. Would you like to join?",
    "join": "You can join PSITS by signing up on our Facebook page!",
    "default": "I'm sorry, I didn't quite understand that. Can you try rephrasing?",
    "hi":"hiii, can I help you with anything?",
    "contact": "You can contact us in the Contact Page",
    "thanks": "Happy to help",
    "thank you": "I'm glad to help you!",
    "Thank you": "I'm glad to help you!"
  };

  // Function to determine the bot's response
  const getBotResponse = (userMessage) => {
    return botResponses[userMessage.toLowerCase()] || botResponses['default'];
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, user: 'You' }];
    setMessages(newMessages);

    // Get bot response based on user input
    const botResponse = getBotResponse(input);
    setMessages([...newMessages, { text: botResponse, user: 'Bot' }]);

    setInput(''); // Clear input after sending message
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user === 'You' ? 'user-message' : 'bot-message'}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
