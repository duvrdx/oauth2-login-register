import { AxiosInstance } from 'axios';
import { useAuthStore } from '../stores/auth';
import Token from '../models/Token';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}


export default {
  login: async (apiInstance: AxiosInstance, username: string, password: string): Promise<Token> => {
    const data = new URLSearchParams();

    data.append('grant_type', 'password');
    data.append('client_id', process.env.CLIENT_ID as string);
    data.append('client_secret', process.env.CLIENT_SECRET as string);
    data.append('username', username);
    data.append('password', password);

    try {
      const response = await apiInstance.post<Token>(process.env.OAUTH_TOKEN as string, data, { headers });
      const authStore = useAuthStore();

      authStore.setToken(response.data);

      return response.data;
    } catch (error){
      throw error;
    }
  },
  refresh: async (apiInstance: AxiosInstance, refreshToken: string): Promise<Token> => {
    const data = new URLSearchParams();

    data.append('grant_type', 'refresh_token');
    data.append('client_id', process.env.CLIENT_ID as string);
    data.append('client_secret', process.env.CLIENT_SECRET as string);
    data.append('refresh_token', refreshToken);

    try {
      const response = await apiInstance.post<Token>(process.env.OAUTH_REFRESH as string, data, { headers });
      const authStore = useAuthStore();

      authStore.setToken(response.data);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
