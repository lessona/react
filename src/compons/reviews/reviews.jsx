import { Review } from "../review/review";
import { Text } from "../text/text";
export const Reviews = ({ reviews }) => {
  return (
    <div>
      <Text type={3}>Reviews</Text>
      <ul style={{ color: "red", background: "lightblue" }}>
        {reviews?.map(({ text, id }) => (
          <li key={id}>
            <Review text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
};
