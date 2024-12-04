import { Input } from "../ui/input";

function NavSearch() {
  return (
    <Input
      type="text"
      placeholder="find a property..."
      className="dark:bg-muted"
    />
  );
}

export default NavSearch;
