import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ForecastInfo} from '../ForecastInfo';
import {useNext5HoursForecast} from '../hooks';
import {mockWeatherData} from '../../../utils';

jest.mock('../hooks', () => ({
  useNext5HoursForecast: jest.fn(),
}));
const mockDailyForecastData = mockWeatherData.forecast.forecastday[0];

test('ForecastInfo component renders correctly', () => {
  // Mock the hook to return the expected data
  useNext5HoursForecast.mockReturnValue(mockDailyForecastData.hour);

  // Render the ForecastInfo component with mock data
  render(<ForecastInfo dailyForecast={mockDailyForecastData} />);

  // Check if the forecast title is rendered
  const forecastTitleElement = screen.getByTestId('forecast-title');
  expect(forecastTitleElement).toBeTruthy();
  expect(forecastTitleElement.props.children).toBe('Next 5-Hour Forecast');

  // Check if the forecast container is rendered
  const forecastContainerElement = screen.getByTestId('forecast-container');
  expect(forecastContainerElement).toBeTruthy();

  // Check if the HourlyForecastRow component is rendered for each hour
  const hourlyForecastRows = screen.getAllByTestId(
    /^forecast-\d{2}:\d{2}-row$/,
  );
  hourlyForecastRows.map((row, index) => {
    expect(row).toBeTruthy();
    expect(row.props.children[0].props.children).toBe(
      mockDailyForecastData.hour[index].time.slice(11, 16),
    );
  });
  expect(hourlyForecastRows).toHaveLength(5);
});
