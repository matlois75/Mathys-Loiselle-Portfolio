import logo from "../../assets/site-logo.png";

const Header = () => (
  <header className="py-8">
    <div
      className="container mx-auto relative flex items-center justify-center"
      style={{ minHeight: "4rem" }}
    >
      <h1 className="text-4xl border-b-2 border-black pb-2 mx-auto text-center w-fit relative z-10">
        Mathys Loiselle
      </h1>
      <img
        src={logo}
        alt="Logo"
        className="h-16 absolute right-1/2 -translate-x-[200%] top-1/2 -translate-y-1/2"
        draggable={false}
      />
    </div>
  </header>
);

export default Header;
