import HeaderText from "./HeaderText";

function LoginHeader() {
  return (
    <div className="flex items-center flex-col">
      <img src="Icon.png" alt="" />
      <HeaderText h="Welcome to E-Comm" p="Sign in to continue" />
    </div>
  );
}

export default LoginHeader;
