function LatestLogo({ src, date, p, h2 }) {
  return (
    <div className="flex items-center justify-center px-6">
      <img src={src} alt="" width="60" />
      <div>
        <p className="text-neutralGray text-[10px]">{date}</p>
        <h2 className="font-semibold text-sm">{h2}</h2>
        <p className="text-[9px] w-50">{p}</p>
      </div>
    </div>
  );
}

export default LatestLogo;
