import "./App.css";
import { ThemeContextProvider } from "./compons/theme-context/theme-context";
import { AuthContextProvider } from "./autocontext/auth-context";

import { store } from "./redux/store";

import { ReduxProvider } from "./redux/provider";

const App = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </ThemeContextProvider>
    </ReduxProvider>
  );
};
export default App;
