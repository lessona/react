// import { ReviewContainer } from "../review/review-container";
// import { Text } from "../text/text";
// import styles from "../ul/ul.module.css";
// export const Reviews = ({ reviewsIds }) => {
//   return (
//     <div>
//       <Text type="h3">Reviews</Text>
//       <ul className={styles.ul}>
//         {reviewsIds?.map((id) => (
//           <li key={id}>
//             <ReviewContainer id={id} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import { useAuth } from "../../autocontext/use-auth";
import { ReviewForm } from "../review-form/review-form";
import { ReviewContainer } from "../review/review-container";

export const Reviews = ({ reviewsIds }) => {
  const { auth } = useAuth();
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewsIds.map((id) => (
          <li key={id}>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && <ReviewForm />}
    </div>
  );
};
