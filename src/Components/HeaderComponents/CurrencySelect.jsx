function CurrencySelect() {
  return (
    <>
      <div className="flex gap-2 text-[9px]">
        <select name="" id="">
          <option value="En ~">English</option>
          <option value="Fn ~">French</option>
        </select>
        <select name="" id="">
          <option value="currency">Currency</option>
          <option value="currency">₦ Naira</option>
          <option value="Fn ~">$ USD</option>
        </select>
      </div>
    </>
  );
}

export default CurrencySelect;
