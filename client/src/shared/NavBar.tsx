const NavBar = () => {
  return (
    <div id="NavBar" className="p-5 bg-primary text-lightText">
      <div className="flex justify-between mb-8 items-center">
        <h1 className="text-xl">
          <strong>student</strong>tools
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <h1 className="text-2xl text-center font-extrabold">
        All the tools to help students through university
      </h1>
    </div>
  );
};

export default NavBar;
