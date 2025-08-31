import { useNavigate } from "react-router-dom";

function LoginBtns() {
  const navigate = useNavigate("");
  return (
    <div className="flex flex-col gap-3 pt-3 w-[264px] justify-center">
      {/* Sign In button */}
      {/* <button
        type="submit"
        className="w-[264px] bg-primary hover:bg-primary/90 active:bg-primary/80 transition text-white text-[10px] tracking-wider p-2 rounded-md"
      >
        Sign In
      </button> */}

      {/* OR divider */}
      <p className="text-center text-neutralGray font-bold text-sm">OR</p>

      {/* Social logins */}
      <div className="flex flex-col gap-2">
        <button className="w-[264px] bg-white transition text-neutralGray text-[10px] tracking-wider p-2 rounded-md border border-neutralGray flex items-center gap-2 justify-center">
          <img src="Google.png" alt="" />
          Login With Google
        </button>
        <button className="w-[264px] bg-white transition text-neutralGray text-[10px] tracking-wider p-2 rounded-md border border-neutralGray flex items-center gap-2 justify-center">
          <img src="Facebook.png" alt="" />
          Login With Facebook
        </button>
      </div>

      {/* Footer links */}
      <div className="text-center">
        <p className="text-primary text-[9px] cursor-pointer">
          Forgot Password?
        </p>
        <p className="text-[10px] text-neutral-700">
          Don't have an account?
          <span
            className="text-primary font-semibold px-2 cursor-pointer"
            onClick={() => navigate("/Register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginBtns;
