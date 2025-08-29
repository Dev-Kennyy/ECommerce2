import { Link } from "react-router-dom";

function Favourite() {
  return (
    <div>
      <div style={{ marginTop: "-30px" }} className="flex gap-2 p-2">
        <p>
          <Link to="/">←</Link>
        </p>
        <p className="text-neutralDark font-semibold">Favourite Products</p>
      </div>
    </div>
  );
}

export default Favourite;
