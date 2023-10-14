import { Analytics } from "@vercel/analytics/react";
import { ButtonWhatapss } from "components/atoms/Buttons/ButtonWhatapps";
import "aos/dist/aos.css";
if (process.env.NODE_ENV !== "production") {
  require("../assets/styles/globals.css");
} else {
  require("../assets/styles/build.css");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <ButtonWhatapss />
    </>
  );
}

export default MyApp;
