import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

import { Reviews } from "./reviews";
import {
  REQUEST_PENDING_STATUS,
  REQUEST_REJECTED_STATUS,
} from "../../redux/ui/request/constants";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews-by-restaurant-jd";
import { getUsers } from "../../redux/entities/users/get-users";
import {
  useAddReviewMutation,
  useEditReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { useCallback } from "react";
export const ReviewsContainer = ({ restaurantId }) => {
  // const restaurant = useSelector((state) =>
  //   selectRestaurantById(state, restaurantId)
  // );
  const {
    data,
    isError,
    isFetching: isGetReviewsFetching,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  useGetUsersQuery();
  // const getReviewsStatus = useRequest(getReviewsByRestaurantId, restaurantId);
  // const getUsersStatus = useRequest(getUsers);
  const [addReview, { isLoading: isAddReviewFetching }] =
    useAddReviewMutation();
  // const isLoading =
  //   getReviewsStatus === REQUEST_PENDING_STATUS ||
  //   getUsersStatus === REQUEST_PENDING_STATUS;

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId, review });
    },
    [addReview, restaurantId]
  );

  const [editReview] = useEditReviewMutation();

  const handleEditReview = useCallback(
    (reviewId, review) => {
      editReview({ reviewId, review });
    },
    [editReview]
  );
  // if (isLoading) {
  if (isGetReviewsFetching || isAddReviewFetching) {
    return "...loading reviews";
  }
  // if (getReviewsStatus === REQUEST_REJECTED_STATUS) {
  if (isError) {
    return "error reviews";
  }
  // if (getUsersStatus === REQUEST_REJECTED_STATUS) {
  //   return "error users";
  // }
  if (!data.length) {
    return null;
  }

  // return <Reviews reviewsIds={restaurant.reviews} />;
  return (
    <Reviews
      reviews={data}
      onAddReview={handleAddReview}
      onEditReview={handleEditReview}
    />
  );
};
