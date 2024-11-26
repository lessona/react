import styles from "./count.module.css";

export const Count = ({ value, increment, decrement }) => {
  return (
    <div className={styles.count}>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
