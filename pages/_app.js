import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/scss/style.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="tokyo_tm_all_wrap">
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
}
