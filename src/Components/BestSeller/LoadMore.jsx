import { useNavigate } from "react-router-dom";

function LoadMore() {
  const navigate = useNavigate("");
  return (
    <div
      className="text-center underline cursor-pointer text-primary font-semibold pt-5"
      onClick={() => navigate("All-Products")}
    >
      LOAD MORE
    </div>
  );
}

export default LoadMore;
