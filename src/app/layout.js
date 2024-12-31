import "../app.css";
import { AuthContextProvider } from "../autocontext/auth-context";
import { Layout } from "../compons/layout/layout";
import { ThemeContextProvider } from "../compons/theme-context/theme-context";
import { ReduxProvider } from "../redux/provider";

export const metadata = {
    title: "Vite + React",
    description: "Vite + React",
  };
  export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head>
          <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        </head>
        <body>
          <div id='root'>
          <ReduxProvider>
            <ThemeContextProvider>
              <AuthContextProvider>
                <Layout>{children}</Layout>
              </AuthContextProvider>
            </ThemeContextProvider>
          </ReduxProvider>
        </div>    
        </body>
      </html>
    );
  }