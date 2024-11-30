import { Count } from "../count/count";
import { useForm } from "./use-form";
import { Button } from "../button/button";
import { Text } from "../text/text";
import styles from "./review-form.module.css";
import { useEffect, useRef } from "react";
export const ReviewForm = () => {
  const {
    form,
    setAddress,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clear,
  } = useForm();

  const { name, address, text, rating } = form;

  const nameInputRef = useRef(); // { current: undefined }
  useEffect(() => {
    nameInputRef.current.focus();
    console.log(nameInputRef.current.offsetWidth);
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Text type="h3">Review Form</Text>
      <div className={styles.fields}>
        <span className={styles.label}>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          ref={nameInputRef}
        />
      </div>

      <div className={styles.fields}>
        <span className={styles.label}>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className={styles.fields}>
        <span className={styles.label}>Address</span>
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
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
    </form>
  );
};
