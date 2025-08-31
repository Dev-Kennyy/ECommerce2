function HeaderText({ h, p }) {
  return (
    <div className="text-center">
      <h2 className="text-neutralDark font-semibold">{h}</h2>
      <p className="text-sm text-gray">{p}</p>
    </div>
  );
}

export default HeaderText;
