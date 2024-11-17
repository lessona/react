export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>reviews</h3>
      <ul style={{ color: "red", background: "lightblue" }}>
        {reviews.map(({ text }) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};
