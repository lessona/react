import { Review } from "../review/review";
import { Text } from "../text/text";
import styles from "../ul/ul.module.css";
export const Reviews = ({ reviews }) => {
  return (
    <div>
      <Text type={3}>Reviews</Text>
      <ul className={styles.ul}>
        {reviews?.map(({ text, id }) => (
          <li key={id}>
            <Review text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
};
