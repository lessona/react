import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
    //   providesTags: (restaurantId) => [{ type: "Reviews", restaurantId }],
    providesTags: () => {
        return [{ type: "Reviews" }];
      },
    // providesTags: (...result) => [{ type: "Reviews", id: result[2] }],
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    // getDishes: builder.query({
    //     query: () => "/dishes",
    //   }),
      getDishById: builder.query({
        query: (dishId) => `/dishes?dishId=${dishId}`,
      }), 
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
    //   invalidatesTags: ({ restaurantId }) => [{ type: "Reviews", restaurantId }],
    invalidatesTags: () => {
        return [{ type: "Reviews" }];
          },
        // invalidatesTags: (...result) => [
        //     { type: "Reviews", restaurantId: result[2].restaurantId },
        //   ],  
    }),
    editReview: builder.mutation({
        query: ({ reviewId, review }) => ({
          url: `/review/${reviewId}`,
          method: "PATCH",
          body: review,
        }),
        invalidatesTags: () => {
            return [{ type: "Reviews" }];
              },
        // invalidatesTags: (...result) => [
        //   { type: "Reviews", reviewId: result[2].reviewId },
        // ],
      }),
  }),
});
export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetMenuByRestaurantIdQuery,
//   useGetDishesQuery, 
  useGetDishByIdQuery, 
  useGetRestaurantByIdQuery,
  useAddReviewMutation,
  useEditReviewMutation, 
} = apiSlice;