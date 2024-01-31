import { AxiosInstance } from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export class GenericRegisterService<T> {
  private readonly baseUrl: string;
  private readonly apiInstance: AxiosInstance;

  constructor(resource: string, apiInstance: AxiosInstance) {
    this.baseUrl = `/${resource}`;
    this.apiInstance = apiInstance;
  }

  create(data: T): Promise<T> {
    try {
      return this.apiInstance.post<T>(this.baseUrl, data, { headers }).then((response) => response.data);
    } catch (error) {
      throw error;
    }
  }
}
