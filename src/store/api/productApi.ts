import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<Product[], Product[]>({
      query: () => ({
        method: "GET",
        url: "products",
      }),
    }),
  }),
});

export const { useGetProductQuery } = productApi;
