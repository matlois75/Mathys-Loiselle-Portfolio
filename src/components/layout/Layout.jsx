import Navigation from "./Navigation";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({
  children,
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12 flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default Layout;
