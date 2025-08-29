function HomePageSearch() {
  return (
    <div className="flex justify-center pt-29 items-center">
      <div className="relative w-96">
        {" "}
        {/* Increased width */}
        <input
          type="text"
          placeholder="Search Query..."
          className="p-2 w-full pr-20 outline-1 outline-primary shadow-2xl rounded"
        />
        <button className="bg-primary text-white px-4 py-2 rounded absolute right-0 top-0 h-full">
          Search
        </button>
      </div>
    </div>
  );
}

export default HomePageSearch;
