import HeaderText from "./HeaderText";

function RegisterHeader() {
  return (
    <div className="flex items-center flex-col">
      <img src="Icon.png" alt="" />
      <HeaderText h="Let's get started" p="Create new account" />
    </div>
  );
}

export default RegisterHeader;
