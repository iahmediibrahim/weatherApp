import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {addTestId} from '../../utils';
import {
  AppTemplate,
  AppText,
  Row,
  SearchInput,
  WeatherInfo,
} from '../../components';
import useWeatherData from './hooks/useWeatherData';

const Home = () => {
  const {isLoading, isError, weatherData, handleTextDebounce} =
    useWeatherData();
  return (
    <AppTemplate
      backgroundStyle={styles.backgroundStyle}
      title={'Weather Explorer'}
      subTitle={'Explore weather data of any city in the world.'}>
      <ScrollView
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic">
        <SearchInput handleTextDebounce={handleTextDebounce} />

        {isLoading ? (
          <Row justifyContent="center" alignItems="flex-end" marginTop={20}>
            <AppText {...addTestId('loading')}>Loading...</AppText>
          </Row>
        ) : isError ? (
          <Row justifyContent="center" alignItems="flex-end" marginTop={20}>
            <AppText {...addTestId('error')}>
              There's an issue fetching weather data, please try again with
              different city name.
            </AppText>
          </Row>
        ) : (
          <WeatherInfo weatherData={weatherData} />
        )}
      </ScrollView>
    </AppTemplate>
  );
};
export {Home};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0564b5',
  },
  scrollView: {
    paddingHorizontal: 16,
  },
});
