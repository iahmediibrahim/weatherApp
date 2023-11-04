import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiKey = 'API_KEY';
const baseUrl = 'https://api.weatherapi.com';
export const baseQuery = fetchBaseQuery({baseUrl});
