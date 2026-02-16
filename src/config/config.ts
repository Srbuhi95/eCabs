import dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseApiUrl: 'https://api.openweathermap.org/data/2.5',
  apiKey: process.env.API_KEY || '',
  uiUrl: 'https://www.selenium.dev/contact/'
};
