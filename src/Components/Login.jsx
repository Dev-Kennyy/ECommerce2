import LoginBtns from "./LoginBtns";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";

function Login() {
  return (
    <div className="flex items-center justify-center p-9 flex-col">
      <LoginHeader />
      <LoginInput />
      <LoginBtns />
    </div>
  );
}

export default Login;
