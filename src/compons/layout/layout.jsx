export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <header style={{ color: "pink", background: "black" }}>
        Restaurants header
      </header>
      <div style={{ color: "orange", background: "brown" }}>{sidebar}</div>
      {children}
      <footer style={{ color: "yellow", background: "black" }}>
        Restaurants footer
      </footer>
    </div>
  );
};
