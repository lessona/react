import { createRoot } from "react-dom/client";
import { App } from "./app";
//import { restaurants } from "./mock";
const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(<App />
);
