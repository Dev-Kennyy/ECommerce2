import AddidasImage from "./Adiddas/AddidasImage";
import AdidasText from "./Adiddas/AdidasText";

function Adidas() {
  return (
    <div className="sm:flex bg-primary items-center mt-20 px-3 justify-center gap-9">
      <AdidasText />
      <AddidasImage />
    </div>
  );
}

export default Adidas;
