import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";
const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    <h1 style={{ color: "brown", background: "lightyellow" }}>Restaurants</h1>
    <div>
      <h2>restaurant {restaurants[0].name}</h2>
      <h3>Меню</h3>
      <ul style={{ color: "white", background: "black" }}>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul style={{ color: "red", background: "lightblue" }}>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </div>

    <div>
      <h2>restaurant {restaurants[1].name}</h2>
      <h3>Меню</h3>
      <ul style={{ color: "yellow", background: "black" }}>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul style={{ color: "red", background: "lightblue" }}>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </div>

    <div>
      <h2>ресторан {restaurants[2].name}</h2>
      <h3>Меню</h3>
      <ul style={{ color: "pink", background: "black" }}>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul style={{ color: "red", background: "lightblue" }}>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </div>

    <div>
      <h2>ресторан {restaurants[3].name}</h2>
      <h3>Меню</h3>
      <ul style={{ color: "orange", background: "black" }}>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul style={{ color: "red", background: "lightblue" }}>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </div>
  </div>
);
