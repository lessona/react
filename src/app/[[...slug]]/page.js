// import { AppClientOnly } from "./app-client-only";

//import { App } from "../../app";
import { AppClientOnly } from "./app-client-only";

// import App from "../app";

//import App from "next/app";

export function generateStaticParams() {
    return [{ slug: [""] }];
}
const Page = () => {
  return <AppClientOnly />;
};
export default Page;