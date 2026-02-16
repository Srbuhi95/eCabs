import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { config } from '../config/config';

export class WeatherClient {
  private context!: APIRequestContext;

  async init() {
    this.context = await request.newContext();
  }

  async getCurrentWeather(city: string): Promise<APIResponse> {
    return await this.context.get(`${config.baseApiUrl}/weather`, {
      params: { q: city, appid: 
        config.apiKey, 
        units: 'metric'}
    });
  }

  async getForecast(city: string): Promise<APIResponse> {
    return await this.context.get(`${config.baseApiUrl}/forecast`, {
      params: { q: city, 
        appid: config.apiKey,  
        units: 'metric' }
    });
  }

  async getWithoutApiKey(city: string): Promise<APIResponse> {
    return await this.context.get(`${config.baseApiUrl}/weather`, {
      params: { q: city, 
        units: 'metric' }
    });
  }
}
