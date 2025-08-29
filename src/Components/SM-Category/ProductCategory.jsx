function ProductCategory({ icon, p }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl text-primary p-2 rounded-full border border-neutralGray">
        {icon}
      </div>
      <div className="text-neutralGray text-[10px]">{p}</div>
    </div>
  );
}

export default ProductCategory;
