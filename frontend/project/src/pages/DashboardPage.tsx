import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { sendMessage } from '../services/aiService';
import ResponseDisplay from '../components/ResponseDisplay';

const models = [
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
  { id: 'hermes', name: 'Hermes' },
  { id: 'dolphin-mixtral', name: 'Dolphin Mixtral' }
];

const DashboardPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState(models[0].id);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const result = await sendMessage(prompt, model);
      setResponse(result.response);
    } catch (err) {
      setError('Failed to get a response. Please try again.');
      console.error('AI request failed:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">AI Chat</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
              Your Prompt
            </label>
            <textarea
              id="prompt"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-gray-700"
              placeholder="Enter your prompt here..."
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                AI Model
              </label>
              <select
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 text-gray-700"
              >
                {models.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-full sm:w-2/3 flex items-end">
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className={`w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${
                  (isLoading || !prompt.trim()) ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6" role="alert">
          {error}
        </div>
      )}
      
      {response && (
        <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Response</h2>
          <ResponseDisplay content={response} />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;