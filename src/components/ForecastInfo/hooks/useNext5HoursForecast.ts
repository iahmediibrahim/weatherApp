import {DailyForecastData} from '../ForecastInfo.types';

function useNext5HoursForecast(dailyForecast: DailyForecastData) {
  if (!dailyForecast) {
    return [];
  }

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentTimeFormatted = `${currentHour
    .toString()
    .padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

  let next5Hours = [];

  if (currentTimeFormatted > '18:00') {
    // If the current time is greater than 18:00, take the last hours of the day from currentTimeFormatted to 23:00, and the first hours of the next day
    const lastHoursOfTheDay = dailyForecast?.hour.filter(
      hour => hour.time.slice(11, 16) > currentTimeFormatted,
    );
    const firstHoursOfTheNextDay = dailyForecast?.hour.filter(
      hour => hour.time.slice(11, 16) < '23:00',
    );
    next5Hours = [...lastHoursOfTheDay, ...firstHoursOfTheNextDay].slice(0, 5);
  } else {
    next5Hours = dailyForecast?.hour
      .filter(hour => hour.time.slice(11, 16) > currentTimeFormatted)
      .slice(0, 5);
  }
  return next5Hours;
}

export {useNext5HoursForecast};
