import {apiService} from '../../apiService';
import {apiKey} from '../../baseQuery';
import {endpoints} from '../../endpoints';

const {getCurrentWeather, getForecastWeather} = endpoints;
export const weatherService = apiService.injectEndpoints({
  endpoints: builder => ({
    getCurrentWeather: builder.query({
      query: city => {
        return {
          url: getCurrentWeather.endpoint,
          method: getCurrentWeather.method,
          params: {
            q: city,
            key: apiKey,
          },
        };
      },
      providesTags: (result, error, args) => [
        {type: 'Weather', id: args[0] + 'current'},
      ],
      keepUnusedDataFor: 3600,
    }),
    getForecastWeather: builder.query({
      query: city => {
        return {
          url: getForecastWeather.endpoint,
          method: getForecastWeather.method,
          params: {
            q: city,
            key: apiKey,
          },
        };
      },
      providesTags: (result, error, args) => [
        {type: 'Weather', id: args[0] + 'forecast'},
      ],
      keepUnusedDataFor: 3600,
    }),
  }),
  overrideExisting: false,
});

const {useGetCurrentWeatherQuery, useGetForecastWeatherQuery} = weatherService;
export {useGetCurrentWeatherQuery, useGetForecastWeatherQuery};
