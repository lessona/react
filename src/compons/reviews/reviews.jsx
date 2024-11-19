import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>reviews</h3>
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
