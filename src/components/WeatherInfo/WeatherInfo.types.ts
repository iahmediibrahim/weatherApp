import {DailyForecastData} from '../ForecastInfo';

export type WeatherData = {
  current: {
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    feelslike_c: number;
    gust_kph: number;
    humidity: number;
    temp_c: number;
    uv: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
  };
  forecast: {
    forecastday: DailyForecastData[];
  };
  location: {
    country: string;
    name: string;
    region: string;
  };
};
