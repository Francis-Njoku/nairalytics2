import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "react-datepicker/dist/react-datepicker.css";

export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}
