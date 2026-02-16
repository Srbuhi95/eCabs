import dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseApiUrl: 'https://api.openweathermap.org/data/2.5',
  apiKey: process.env.API_KEY || '',
  uiUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
};
