import { Count } from "../count/count";
import { useForm } from "./use-form";
import { Button } from "../button/button";
import { Text } from "../text/text";
import styles from "./review-form.module.css";

export const ReviewForm = ({ onSubmit, userId }) => {
  const { form, setText, incrementRating, decrementRating, clear } = useForm();
  const { text, rating } = form;
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Text type="h3">Review Form</Text>

      <div className={styles.fields}>
        <span className={styles.label}>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className={styles.rating}>
        <Text>Rating:</Text>
        <Count
          value={rating}
          decrement={decrementRating}
          increment={incrementRating}
        />
      </div>
      <Button onClick={clear}>Clear</Button>
      <Button onClick={() => onSubmit({ text, rating, userId })}>submit</Button>
    </form>
  );
};
