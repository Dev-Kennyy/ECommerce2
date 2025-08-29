import CurrencySelect from "./CurrencySelect";
import UserNav from "./UserNav";

function TopNav() {
  return (
    <div className="flex justify-between p-3 gap-5">
      <CurrencySelect />
      <UserNav />
    </div>
  );
}

export default TopNav;
