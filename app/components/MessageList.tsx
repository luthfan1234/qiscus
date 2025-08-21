"use client";
import React from 'react';
import Message from './Message';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MessageList = ({ messages, participants, currentUser }: any) => (
  <div className="flex-1 px-4 py-4 overflow-y-auto bg-gray-50">
    {messages.map((message) => {
      const sender = participants?.find?.((p) => p.id === message.sender) || { name: 'Unknown' };
      return <Message key={message.id} message={message} sender={sender} currentUser={currentUser} />;
    })}
  </div>
);

export default MessageList;