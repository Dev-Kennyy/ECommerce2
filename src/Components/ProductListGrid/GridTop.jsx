import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

function GridTop() {
  return (
    <div className="sm:flex justify-center items-center gap-9 p-4 hidden">
      <TopLeft />
      <TopRight />
    </div>
  );
}

export default GridTop;
