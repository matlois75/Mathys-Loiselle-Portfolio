import logo from "../../assets/site-logo.png";

const Header = () => (
  <header className="py-4 sm:py-6 md:py-8">
    <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-center min-h-[3rem] sm:min-h-[4rem]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl border-b-2 border-black pb-1 sm:pb-2 mx-auto text-center w-fit relative z-10 mb-3 sm:mb-4 md:mb-0">
        Mathys Loiselle
      </h1>
      <img
        src={logo}
        alt="Logo"
        className="h-12 sm:h-14 md:h-16 md:absolute md:right-1/2 md:-translate-x-[200%] md:top-1/2 md:-translate-y-1/2"
        draggable={false}
      />
    </div>
  </header>
);

export default Header;
