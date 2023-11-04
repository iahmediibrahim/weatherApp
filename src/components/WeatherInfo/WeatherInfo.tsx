import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ForecastInfo} from '../ForecastInfo/ForecastInfo';
import {AppText, Divider} from '../shared';
import {WeatherData} from './WeatherInfo.types';
import {addTestId} from '../../utils';
import {CurrentCondition} from './components';

const styles = StyleSheet.create({
  weatherInfoContainer: {
    paddingTop: 16,
  },
});

interface WeatherInfoProps {
  weatherData: WeatherData;
}
const WeatherInfo: React.FC<WeatherInfoProps> = ({weatherData}) => {
  return (
    <View
      style={styles.weatherInfoContainer}
      {...addTestId('weather-container')}>
      <AppText
        fontSize={24}
        fontWeight="bold"
        {...addTestId('weather-city-name-and-country')}>
        {weatherData?.location?.name}, {weatherData?.location?.country}
      </AppText>

      <CurrentCondition current={weatherData.current} />
      <Divider color="white" {...addTestId('content-divider')} />
      <ForecastInfo dailyForecast={weatherData.forecast.forecastday[0]} />
    </View>
  );
};

export {WeatherInfo};
