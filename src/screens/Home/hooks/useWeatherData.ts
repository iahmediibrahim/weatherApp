import {useState, useCallback} from 'react';
import {useGetForecastWeatherQuery} from '../../../redux';
import {debounce} from '../../../utils';

function useWeatherData() {
  const [city, setCity] = useState('');
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useGetForecastWeatherQuery(city);
  console.log('weatherData', weatherData);
  const handleSearch = (search: string) => {
    if (search && search.length > 2) {
      setCity(search);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1000), []);

  return {
    city,
    weatherData,
    isLoading,
    isError,
    handleSearch,
    handleTextDebounce,
  };
}

export default useWeatherData;
