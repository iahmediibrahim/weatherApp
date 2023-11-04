import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Home} from '../Home';
import useWeatherData from '../hooks/useWeatherData';
import {mockWeatherData} from '../../../utils';
import {act} from 'react-test-renderer';

jest.mock('../hooks/useWeatherData'); // Mock the custom hook

describe('Home Component', () => {
  it('verify input renders', () => {
    // Mock the hook to return initial state
    useWeatherData.mockReturnValue({
      isLoading: false,
      isError: false,
      weatherData: mockWeatherData,
      handleTextDebounce: jest.fn(),
    });

    const {getByTestId} = render(<Home />);

    const inputElement = getByTestId('search-input');
    expect(inputElement).toBeTruthy();
  });
  it('renders loading state', async () => {
    // Mock the hook to return loading state
    useWeatherData.mockReturnValue({
      isLoading: true,
      isError: false,
      weatherData: null,
      handleTextDebounce: jest.fn(),
    });

    const {getByTestId} = render(<Home />);

    const loadingElement = getByTestId('loading');
    expect(loadingElement).toBeTruthy();

    // Ensure the loading text is displayed
    expect(loadingElement.props.children).toBe('Loading...');
  });

  it('renders error state', () => {
    // Mock the hook to return error state
    useWeatherData.mockReturnValue({
      isLoading: false,
      isError: true,
      weatherData: null,
      handleTextDebounce: jest.fn(),
    });

    const {getByTestId} = render(<Home />);

    const errorElement = getByTestId('error');
    expect(errorElement).toBeTruthy();

    // Ensure the error message is displayed
    expect(errorElement.props.children).toBe(
      "There's an issue fetching weather data, please try again with different city name.",
    );
  });

  it('renders weather info', async () => {
    // Mock the hook to return weather data
    useWeatherData.mockReturnValue({
      isLoading: false,
      isError: false,
      weatherData: mockWeatherData,
      handleTextDebounce: jest.fn(),
    });

    const {getByTestId} = render(<Home />);

    // Wait for the component to render the weather info
    await waitFor(() => {
      const weatherContainer = getByTestId('weather-container');
      expect(weatherContainer).toBeTruthy();
    });
  });
});
