import apiClient from './apiClient';

interface LoginResponse {
  token: string;
  user: {
    email: string;
    name?: string;
  };
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};