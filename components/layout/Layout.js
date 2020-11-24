import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => (
  <div id="customer">
    <div className="body">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);
export default Layout;
