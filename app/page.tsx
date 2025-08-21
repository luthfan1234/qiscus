"use client";
import React, { useState, useEffect } from 'react';
import ChatContainer from './components/ChatContainer';

export default function HomePage() {
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/extended_chat_data.json')
      .then(res => res.json())
      .then(data => {
        setRoomData(data.results[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading chat data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!roomData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-red-500">Error loading chat data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <ChatContainer room={roomData} />
    </div>
  );
}