import React, { useState } from 'react';
import { AlertCircle, Send, Image as ImageIcon } from 'lucide-react';
import Logo from './Logo';

interface PostFormProps {
  onSubmit: (content: string) => void;
}

export default function PostForm({ onSubmit }: PostFormProps) {
  const [content, setContent] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }
    if (content.trim()) {
      onSubmit(content);
      setContent('');
      setIsConfirming(false);
    }
  };

  return (
    <div className="post-card rounded-xl p-4">
      <div className="flex items-center space-x-3 mb-3">
        <div className="hover-platypus">
          <Logo className="h-10 w-10" />
        </div>
        <p className="text-white font-medium">Share your unique perspective!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-4 rounded-lg bg-black/40 border border-white/10 focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none text-white placeholder-gray-400"
          placeholder="What's your unique take on this?"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <ImageIcon className="h-5 w-5" />
          </button>

          <div className="flex items-center space-x-2">
            {isConfirming && (
              <button
                type="button"
                className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                onClick={() => setIsConfirming(false)}
              >
                Rethink
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-full hover:bg-black/80 transition-colors flex items-center space-x-2 border border-white/10"
            >
              <Send className="h-4 w-4" />
              <span>{isConfirming ? 'Yes, Share My Take' : 'Share Opinion'}</span>
            </button>
          </div>
        </div>
        
        {isConfirming && (
          <div className="mt-3 p-3 bg-white/5 rounded-lg flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Is this your true perspective?</p>
              <p className="text-sm text-gray-300">Like our platypus mascot, be proud of being different - but make sure it's authentic!</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}