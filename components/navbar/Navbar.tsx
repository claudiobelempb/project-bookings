import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import { DarkMode } from "./DarkMode";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <div className="flex gap-4 sm:justify-between flex-grow">
          <Logo />
          <NavSearch />
        </div>

        <div className="flex gap-4 sm:justify-between items-center justify-end">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
