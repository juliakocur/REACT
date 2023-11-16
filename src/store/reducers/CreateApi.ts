import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IStarship {
  page?: string;
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
  onClick?: () => void;
}

interface ICard {
  count: number;
  results: IStarship[];
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
}

export const CreateApi = createApi({
  reducerPath: 'CreateApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/starships' }),
  endpoints: (builder) => ({
    getStarships: builder.query<ICard, string>({
      query: (page) => `?search=${localStorage.getItem('Value') ?? ''}&page=${page}`,
    }),
    getStarship: builder.query<ICard, string>({
      query: (name) => `?search=${name}`,
    }),
  }),
});

export const { useGetStarshipsQuery } = CreateApi;
export const { useGetStarshipQuery } = CreateApi;
