const FilterPill = () => {
  const filters = ["All", "Maths", "Physics", "Life & Finance", "Health"];

  const filterButtons = filters.map((filter) => (
    <button className="mx-2 my-1 bg-secondary px-4 py-1 rounded-full">
      <p className="text-lightText">{filter}</p>
    </button>
  ));

  return (
    <div id="FilterPill" className="pl-5">
      {filterButtons}
    </div>
  );
};

export default FilterPill;
