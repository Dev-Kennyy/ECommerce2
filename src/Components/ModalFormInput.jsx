function ModalFormInput({ type, label, name, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      className="bg-graylight rounded text-[12px] p-2 outline-primary text-neutralDark"
    />
  );
}

export default ModalFormInput;
