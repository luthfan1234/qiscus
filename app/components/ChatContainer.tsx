
"use client";
import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChatContainer = (props: any) => {
  const { room } = props;
  const [messages, setMessages] = useState(room.comments || []);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentUser = room.room.participant.find((p: any) => p.role === 2) || { id: 'customer@mail.com', name: 'You' };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSend = (text: any) => {
    if (!text || !text.trim()) return;
    const newMessage = {
      id: Date.now(),
      type: 'text',
      message: text.trim(),
      sender: currentUser.id
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setMessages((prev: any) => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col w-full max-w-md h-[85vh] bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <ChatHeader room={room.room} />
      <MessageList messages={messages} participants={room.room.participant} currentUser={currentUser} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;