import { useNavigate } from "react-router-dom";
import RegisterHeader from "../Components/RegisterHeader";
import SignForms from "../Components/SignForms";

function SignPage() {
  const navigate = useNavigate("");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <RegisterHeader />
        <SignForms />
        <p className="text-[10px] text-neutral-700">
          have an account?
          <span
            className="text-primary font-semibold px-2 cursor-pointer"
            onClick={() => navigate("/Login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignPage;
