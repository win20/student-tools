const SearchBar = () => {
  return (
    <div id="SearchBar" className="p-5">
      <span className="relative mx-auto text-gray-600">
        <input
          className="border-2 border-primary bg-white h-10 px-5 pr-16 rounded-full text-md focus:outline-none"
          type="search"
          name="search"
          placeholder="Search..."
        />
        <button type="submit" className="absolute right-4 top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-600 fill-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
