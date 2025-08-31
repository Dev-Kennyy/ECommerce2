function Inputs({ type, placeholder, icon, value, onChange, name }) {
  return (
    <div className="relative w-[264px]">
      <input
        type={type}
        name={name} // ✅ Add this so handleChange can map correctly
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="peer p-2 pl-8 text-[12px] w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
      />
      {icon && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-primary transition-colors">
          {icon}
        </div>
      )}
    </div>
  );
}

export default Inputs;
