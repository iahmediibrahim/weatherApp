import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {HourlyForecastRow} from '../HourlyForecastRow';
import {mockWeatherData} from '../../../../utils';
const mockHourlyForecastData = mockWeatherData.forecast.forecastday[0].hour[0];
test('HourlyForecastRow component renders correctly', () => {
  // Render the HourlyForecastRow component with mock data
  render(<HourlyForecastRow hour={mockHourlyForecastData} />);

  // Check if the forecast hour is rendered
  const forecastHourElement = screen.getByTestId('forecast-hour');
  expect(forecastHourElement).toBeTruthy();
  expect(forecastHourElement.props.children).toBe(
    mockHourlyForecastData.time.slice(11, 16),
  );

  // Check if the forecast icon is rendered
  const forecastIconElement = screen.getByTestId('forecast-icon');
  expect(forecastIconElement).toBeTruthy();
  expect(forecastIconElement.props.source.uri).toBe(
    'https://cdn.weatherapi.com/weather/64x64/day/123.png',
  );
  // Check if the forecast temperature is rendered
  const forecastTempElement = screen.getByTestId('forecast-temp');
  expect(forecastTempElement).toBeTruthy();
  expect(forecastTempElement.props.children).toBe(
    `${mockHourlyForecastData.temp_c}°C`,
  );
});
