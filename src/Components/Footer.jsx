import LargeScreen from "./Footer/LargeScreen";
import SmallScreen from "./Footer/SmallScreen";

function Footer() {
  return (
    <div className="mt-18">
      <LargeScreen />
      <div>
        <SmallScreen />
      </div>
    </div>
  );
}

export default Footer;
