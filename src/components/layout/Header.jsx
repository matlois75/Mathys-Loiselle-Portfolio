import logo from "../../assets/site-logo.png";

const Header = () => (
  <header className="py-8">
    <div className="container mx-auto flex items-center justify-center space-x-4">
      <img src={logo} alt="Logo" className="h-16" />
      <h1 className="text-4xl border-b-2 border-black pb-2">Mathys Loiselle</h1>
    </div>
  </header>
);

export default Header;
