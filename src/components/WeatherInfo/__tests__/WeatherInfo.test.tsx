import React from 'react';
import {render} from '@testing-library/react-native';
import {WeatherInfo} from '../WeatherInfo';
import {mockWeatherData} from '../../../utils';

describe('WeatherInfo Component', () => {
  it('should render weather information correctly', () => {
    const {getByTestId, getByText} = render(
      <WeatherInfo weatherData={mockWeatherData} />,
    );

    const weatherContainer = getByTestId('weather-container');
    const cityAndCountryText = getByTestId('weather-city-name-and-country');
    const contentDivider = getByTestId('content-divider');

    // Check if the component is rendered
    expect(weatherContainer).toBeTruthy();

    // Check if city and country information is rendered
    expect(cityAndCountryText).toBeTruthy();
    expect(getByText('London, United Kingdom')).toBeTruthy();

    // Check if CurrentCondition is rendered
    const currentConditionTemp = getByTestId('weather-temp-row');
    const currentCondition = getByTestId('condition-row');
    expect(currentConditionTemp).toBeTruthy();
    expect(currentCondition).toBeTruthy();

    // Check if the content divider is rendered
    expect(contentDivider).toBeTruthy();

    // Check if ForecastInfo is rendered
    const forecastInfo = getByTestId('forecast-container');
    expect(forecastInfo).toBeTruthy();
  });
});
