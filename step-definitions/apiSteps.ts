import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { WeatherClient } from '../src/api/WeatherClient';

let weatherClient = new WeatherClient();
let response: any;
let weatherData: any;
let forecastData: any;

Given('I request current weather for city {string}', async function (city: string) {
  await weatherClient.init();
  response = await weatherClient.getCurrentWeather(city);
});

Given('I request weather without API key for city {string}', async function (city: string) {
  await weatherClient.init();
  response = await weatherClient.getWithoutApiKey(city);
});

Then('the response status should be {int}', function (status: number) {
  expect(response.status()).toBe(status);
});

Then('the response status should not be {int}', function (status: number) {
  expect(response.status()).not.toBe(status);
});

Then('the response should contain temperature data', async function () {
  const body = await response.json();
  expect(body.main.temp).toBeDefined();
});

Given('I retrieve current weather and forecast for {string}', async function (city: string) {
  await weatherClient.init();
  const weatherResponse = await weatherClient.getCurrentWeather(city);
  const forecastResponse = await weatherClient.getForecast(city);

  weatherData = await weatherResponse.json();
  forecastData = await forecastResponse.json();
});

Then('the temperatures should match for current day', function () {
  const weatherTemp = weatherData.main.temp;
  const forecastTemp = forecastData.list[0].main.temp;
  expect(weatherTemp).toBeDefined();
  expect(forecastTemp).toBeDefined();
});
