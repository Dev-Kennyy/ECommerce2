import SecondNav from "./HeaderComponents/SecondNav";
import SmallScreenHeader from "./HeaderComponents/SmallScreenHeader";
import TopNav from "./HeaderComponents/TopNav";

function Header() {
  return (
    <>
      <div className="hidden xs:block">
        <TopNav />
        <SecondNav />
      </div>
      <div className="xs:hidden mb-8">
        <SmallScreenHeader />
      </div>
    </>
  );
}

export default Header;
