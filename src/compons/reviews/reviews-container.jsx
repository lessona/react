"use client";
import { Reviews } from "./reviews";

import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { useCallback } from "react";
export const ReviewsContainer = ({ restaurantId }) => {
  const {
    data,
    isError,
    isFetching: isGetReviewsFetching,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewFetching }] =
    useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId, review });
    },
    [addReview, restaurantId]
  );

  if (isGetReviewsFetching || isAddReviewFetching) {
    return "...loading reviews";
  }

  if (isError) {
    return "error reviews";
  }

  if (!data.length) {
    return null;
  }

  return <Reviews reviews={data} onAddReview={handleAddReview} />;
};
