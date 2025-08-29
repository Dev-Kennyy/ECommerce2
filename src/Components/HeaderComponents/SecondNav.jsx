import LogoNav from "./LogoNav";
import RightNav from "./RightNav";
function SecondNav() {
  return (
    <div className="p-3.5 flex justify-between items-top">
      <LogoNav />
      <RightNav />
    </div>
  );
}

export default SecondNav;
