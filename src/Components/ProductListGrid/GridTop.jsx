import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

function GridTop() {
  return (
    <div className="flex justify-center items-center gap-9 p-4">
      <TopLeft />
      <TopRight />
    </div>
  );
}

export default GridTop;
