function Feature({ icon, p, h1 }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-tertiary text-2xl">{icon}</p>
      <h1>{h1}</h1>
      <p className="text-[10px] text-center w-56">{p}</p>
    </div>
  );
}

export default Feature;
