import {createApi} from '@reduxjs/toolkit/query/react';

import {baseQuery} from '../baseQuery';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  tagTypes: ['Weather'],
});
