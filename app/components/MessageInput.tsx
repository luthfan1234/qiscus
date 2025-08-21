"use client";
import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MessageInput = ({ onSend }: any) => {
  const [text, setText] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submit = (e: any) => {
    e?.preventDefault?.();
    if (!text.trim()) return;
    onSend?.(text);
    setText('');
  };

  return (
    <form onSubmit={submit} className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Type a message..."
        className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
      />
      <button 
        type="submit" 
        className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center justify-center transition-colors"
      >
        ➤
      </button>
    </form>
  );
};

export default MessageInput;