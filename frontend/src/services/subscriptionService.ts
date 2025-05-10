import apiClient from './apiClient';

interface CheckoutResponse {
  url: string;
}

export const createCheckoutSession = async (): Promise<CheckoutResponse> => {
  try {
    const response = await apiClient.post('/stripe/checkout');
    return response.data;
  } catch (error) {
    console.error('Subscription service error:', error);
    throw error;
  }
};