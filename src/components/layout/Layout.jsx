import Navigation from "./Navigation";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-black"
      >
        Skip to main content
      </a>
      <Navigation />
      <Header />
      <main id="main-content" className="mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-2 sm:px-4 md:pr-16 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
