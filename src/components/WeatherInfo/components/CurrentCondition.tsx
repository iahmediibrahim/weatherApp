import React from 'react';
import {addTestId} from '../../../utils';
import {AppText, Row} from '../../shared';
import {WeatherData} from '../WeatherInfo.types';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  weatherIcon: {
    width: 48,
    height: 24,
  },
});
interface ConditionProps {
  current: WeatherData['current'];
}
const CurrentCondition: React.FC<ConditionProps> = ({current}) => (
  <>
    <Row
      marginTop={16}
      justifyContent="space-between"
      alignItems="center"
      {...addTestId('weather-temp-row')}>
      <AppText fontSize={82} {...addTestId('weather-temp')}>
        {current.temp_c}°
      </AppText>
      <Image
        source={{uri: 'https:' + current.condition?.icon}}
        style={styles.weatherIcon}
        {...addTestId('weather-icon')}
      />
    </Row>
    <Row
      marginTop={16}
      justifyContent="space-between"
      alignItems="center"
      {...addTestId('condition-row')}>
      <AppText fontWeight="bold" {...addTestId('condition-text')}>
        {current.condition.text}
      </AppText>
      <AppText
        fontSize={16}
        fontWeight="bold"
        {...addTestId('condition-feelslike')}>
        Feels like {current.feelslike_c}°
      </AppText>
    </Row>
  </>
);
export {CurrentCondition};
