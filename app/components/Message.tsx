"use client";
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Message = ({ message, sender, currentUser }: any) => {
  const isMe = message.sender === currentUser?.id;
  
  // Modern minimalist design
  const maxWidth = 'max-w-[70%]';
  const alignment = isMe ? 'ml-auto' : 'mr-auto';
  const bgColor = isMe 
    ? 'bg-blue-500 text-white' 
    : 'bg-gray-100 text-gray-900';
  const roundedStyle = isMe 
    ? 'rounded-2xl rounded-br-md' 
    : 'rounded-2xl rounded-bl-md';

  const renderContent = () => {
    if (message.type === 'text') {
      return <div className="leading-relaxed">{message.message}</div>;
    }
    
    if (message.type === 'image') {
      return (
        <div className="space-y-1">
          <div className="overflow-hidden rounded-md">
            <img 
              src={message.mediaUrl} 
              alt="img" 
              className="max-w-xs w-full h-auto" 
            />
          </div>
          {message.message && <div className="text-sm">{message.message}</div>}
          {message.mediaMetadata?.fileName && (
            <div className={`text-xs ${isMe ? 'text-blue-100' : 'text-gray-500'}`}>
              {message.mediaMetadata.fileName}
            </div>
          )}
        </div>
      );
    }
    
    if (message.type === 'video') {
      return (
        <div className="space-y-1">
          <div className="overflow-hidden rounded-md">
            <video controls className="max-w-xs w-full rounded-md">
              <source src={message.mediaUrl} type="video/mp4" />
            </video>
          </div>
          {message.message && <div className="text-sm">{message.message}</div>}
          {message.mediaMetadata?.fileName && (
            <div className={`text-xs ${isMe ? 'text-blue-100' : 'text-gray-500'}`}>
              {message.mediaMetadata.fileName} 
              {message.mediaSize?.duration && ` • ${message.mediaSize.duration}`}
            </div>
          )}
        </div>
      );
    }
    
    if (message.type === 'pdf') {
      return (
        <div className={`rounded-md p-3 ${isMe ? 'bg-blue-400/20' : 'bg-gray-100'} border-l-4 ${isMe ? 'border-blue-300' : 'border-red-400'}`}>
          <div className="flex items-center gap-3">
            <div className="text-red-500 text-xl">📄</div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">{message.mediaMetadata?.fileName || 'Document'}</div>
              <div className={`text-xs ${isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                PDF • {message.mediaSize?.pages} pages • {message.mediaSize?.fileSize}
              </div>
            </div>
          </div>
          {message.message && <div className="mt-2 text-sm">{message.message}</div>}
          <a 
            href={message.mediaUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-block mt-2 px-3 py-1 text-xs rounded ${
              isMe 
                ? 'bg-white text-blue-600 hover:bg-blue-50' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Buka PDF
          </a>
        </div>
      );
    }
    
    return <div className="leading-relaxed">{message.message}</div>;
  };

  return (
    <div className={`mb-4 ${maxWidth} ${alignment}`}>
      {!isMe && (
        <div className="text-xs text-gray-500 mb-2 px-1 font-medium">
          {sender?.name || 'Unknown'}
        </div>
      )}
      <div className={`px-4 py-3 ${roundedStyle} ${bgColor}`}>
        {renderContent()}
      </div>
      <div className={`text-xs text-gray-400 mt-1 px-1 ${isMe ? 'text-right' : 'text-left'}`}>
        {new Date().toLocaleTimeString('id-ID', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}
      </div>
    </div>
  );
};

export default Message;