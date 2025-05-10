import React, { useState } from 'react';
import { CreditCard, Check } from 'lucide-react';
import { createCheckoutSession } from '../services/subscriptionService';

const SubscriptionPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubscribe = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const { url } = await createCheckoutSession();
      window.location.href = url;
    } catch (err) {
      setError('Failed to create checkout session. Please try again.');
      console.error('Subscription checkout failed:', err);
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Subscription Plans</h1>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6" role="alert">
          {error}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 bg-indigo-50 border-b border-indigo-100">
            <h2 className="text-xl font-bold text-indigo-700">Free Plan</h2>
            <p className="text-3xl font-bold mt-2">$0<span className="text-lg font-normal text-gray-500">/month</span></p>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Basic AI model access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>10 messages per day</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Standard response time</span>
              </li>
            </ul>
            <div className="mt-6">
              <button
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
                disabled
              >
                Current Plan
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-indigo-500">
          <div className="absolute -mt-2 -mr-2 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            RECOMMENDED
          </div>
          <div className="p-6 bg-indigo-600">
            <h2 className="text-xl font-bold text-white">Premium Plan</h2>
            <p className="text-3xl font-bold mt-2 text-white">$19<span className="text-lg font-normal text-indigo-100">/month</span></p>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Access to all AI models</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Unlimited messages</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Priority response time</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Advanced customization options</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Premium support</span>
              </li>
            </ul>
            <div className="mt-6">
              <button
                onClick={handleSubscribe}
                disabled={isLoading}
                className={`w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4" />
                    Subscribe Now
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;