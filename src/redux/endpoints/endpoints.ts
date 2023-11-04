export const endpoints = {
  getCurrentWeather: {
    endpoint: '/v1/current.json',
    params: {
      q: '{{city}}',
      key: '{{apiKey}}',
    },
    method: 'GET',
  },
  getForecastWeather: {
    endpoint: '/v1/forecast.json',
    params: {
      q: '{{city}}',
      key: '{{apiKey}}',
    },
    method: 'GET',
  },
};
