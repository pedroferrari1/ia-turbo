import apiClient from './apiClient';

interface AIResponse {
  response: string;
  model: string;
}

export const sendMessage = async (prompt: string, model: string): Promise<AIResponse> => {
  try {
    const response = await apiClient.post('/ai/chat', { prompt, model });
    return response.data;
  } catch (error) {
    console.error('AI service error:', error);
    throw error;
  }
};