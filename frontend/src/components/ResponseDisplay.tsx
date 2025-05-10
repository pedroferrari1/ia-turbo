import React from 'react';

interface ResponseDisplayProps {
  content: string;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ content }) => {
  // Simple formatting for markdown-like content
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold my-3">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-bold my-2">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-bold my-2">{line.substring(4)}</h3>;
        }
        
        // Code blocks
        if (line.startsWith('```')) {
          return <pre key={index} className="bg-gray-100 p-4 rounded my-2 font-mono text-sm overflow-x-auto">{line.substring(3)}</pre>;
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4">{line.substring(2)}</li>;
        }
        if (line.startsWith('1. ')) {
          return <li key={index} className="ml-4 list-decimal">{line.substring(3)}</li>;
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular text
        return <p key={index} className="my-2">{line}</p>;
      });
  };
  
  return <div className="prose max-w-none text-gray-700">{formatContent(content)}</div>;
};

export default ResponseDisplay;