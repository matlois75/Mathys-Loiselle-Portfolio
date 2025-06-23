import Navigation from "./Navigation";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <Navigation />
      <Header />
      <main className="mx-auto pt-24 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
