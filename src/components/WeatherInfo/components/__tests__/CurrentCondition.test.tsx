import React from 'react';
import {render} from '@testing-library/react-native';
import {CurrentCondition} from '../CurrentCondition';
import {mockWeatherData} from '../../../../utils';

describe('CurrentCondition Component', () => {
  it('renders temperature', () => {
    const {getByTestId, getByText} = render(
      <CurrentCondition current={mockWeatherData.current} />,
    );

    const temperatureElement = getByTestId('weather-temp');
    expect(temperatureElement).toBeTruthy();
    expect(getByText('12°')).toBeTruthy();
  });

  it('renders weather icon', () => {
    const {getByTestId} = render(
      <CurrentCondition current={mockWeatherData.current} />,
    );

    const weatherIconElement = getByTestId('weather-icon');
    expect(weatherIconElement).toBeTruthy();
    expect(weatherIconElement.props.source.uri).toBe(
      'https://cdn.weatherapi.com/weather/64x64/day/302.png',
    );
  });

  it('renders condition text', () => {
    const {getByTestId, getByText} = render(
      <CurrentCondition current={mockWeatherData.current} />,
    );

    const conditionTextElement = getByTestId('condition-text');
    expect(conditionTextElement).toBeTruthy();
    expect(getByText('Moderate rain')).toBeTruthy();
  });

  it('renders feels like temperature', () => {
    const {getByTestId, getByText} = render(
      <CurrentCondition current={mockWeatherData.current} />,
    );

    const feelsLikeElement = getByTestId('condition-feelslike');
    expect(feelsLikeElement).toBeTruthy();
    expect(getByText('Feels like 10.5°')).toBeTruthy();
  });
});
