import { useNavigate } from "react-router-dom";

function ContactHeader() {
  const navigate = useNavigate("");
  return (
    <div className="flex justify-center bg-headerNav w-full">
      <div className="text-sm p-3">
        <span
          className="text-primary cursor-pointer px-2"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        / <span> Contact</span>
      </div>
    </div>
  );
}

export default ContactHeader;
