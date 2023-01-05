const NavBar = () => {
  return (
    <div id="NavBar" className="p-5 bg-primary text-lightText md:p-10">
      <div className="flex justify-between mb-8 items-center md:mb-12">
        <h1 className="text-xl md:text-3xl">
          <strong>student</strong>tools
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 md:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <a href="/" className="hidden md:flex items-center text-lg">
          University Finder
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 pl-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>

      <h1 className="text-3xl text-center font-extrabold md:text-4xl lg:text-5xl">
        All the tools to help students
        <br />
        through university
      </h1>
    </div>
  );
};

export default NavBar;
