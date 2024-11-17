export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>menu</h3>
      <ul>
        {menu.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
