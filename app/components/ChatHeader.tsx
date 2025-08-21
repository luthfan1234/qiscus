import React from 'react';

const ChatHeader = ({ room }) => (
  <div className="p-4 bg-white border-b border-gray-100 flex items-center gap-3">
    <div className="relative">
      <img
        src={room.image_url}
        alt={room.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
      />
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
    </div>
    <div className="flex-1">
      <h1 className="text-lg font-semibold text-gray-900">{room.name}</h1>
      <p className="text-sm text-gray-500">{room.participant.length} participants online</p>
    </div>
    <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer transition-colors">
      <span className="text-gray-600">⋯</span>
    </div>
  </div>
);

export default ChatHeader;