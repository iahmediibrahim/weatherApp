import {Image, StyleSheet} from 'react-native';
import {addTestId} from '../../../utils';
import {AppText, Row} from '../../shared';
import React from 'react';
import {HourlyForecastData} from '../ForecastInfo.types';
const styles = StyleSheet.create({
  weatherIcon: {
    width: 48,
    height: 24,
  },
});
interface HourlyForecastRow {
  hour: HourlyForecastData;
}
const HourlyForecastRow: React.FC<HourlyForecastRow> = ({hour}) => {
  const time = hour.time.slice(11, 16);
  return (
    <Row
      justifyContent="space-between"
      alignContent="center"
      marginVertical={12}
      marginHorizontal={8}
      key={time}
      {...addTestId(`forecast-${time}-row`)}>
      <AppText {...addTestId('forecast-hour')}>{time}</AppText>
      <Image
        source={{uri: 'https:' + hour.condition.icon}}
        style={styles.weatherIcon}
        {...addTestId('forecast-icon')}
      />
      <AppText {...addTestId('forecast-temp')}>{`${hour.temp_c}°C`}</AppText>
    </Row>
  );
};

export {HourlyForecastRow};
