import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../shared';
import {DailyForecastData, HourlyForecastData} from './ForecastInfo.types';
import {addTestId} from '../../utils';
import {HourlyForecastRow} from './components';
import {useNext5HoursForecast} from './hooks';

const styles = StyleSheet.create({
  weatherIconContainer: {
    flex: 1,
    marginTop: 16,
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
interface ForecastInfoProps {
  dailyForecast: DailyForecastData;
}
const ForecastInfo: React.FC<ForecastInfoProps> = ({dailyForecast}) => {
  const next5Hours = useNext5HoursForecast(dailyForecast);
  console.log('next5Hours', next5Hours);
  return (
    <>
      <AppText fontSize={24} fontWeight="bold" {...addTestId('forecast-title')}>
        Next 5-Hour Forecast
      </AppText>
      <View
        style={styles.weatherIconContainer}
        {...addTestId('forecast-container')}>
        {next5Hours?.map((hour: HourlyForecastData) => (
          <HourlyForecastRow hour={hour} key={hour.time} />
        ))}
      </View>
    </>
  );
};
export {ForecastInfo};
