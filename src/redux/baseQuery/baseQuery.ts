import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiKey = '31375ef5b5544697879180535230111';
const baseUrl = 'https://api.weatherapi.com';
export const baseQuery = fetchBaseQuery({baseUrl});
