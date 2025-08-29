import CountDown from "./CountDown";

function ShoeText() {
  return (
    <div className="absolute bottom-0 sm:bottom-30">
      <h1 className="p-4 text-2xl text-white font-bold">
        Super Flash Sale <br /> 50% Off
      </h1>
      <div className="sm:hidden">
        <CountDown />
      </div>
    </div>
  );
}

export default ShoeText;
