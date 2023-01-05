import NavBar from "../../shared/NavBar";
import SearchBar from "./SearchBar";
import FilterPill from "./FilterPill";

const Home = () => {
  return (
    <div id="Home">
      <NavBar />
      <h2 className="text-3xl pt-10 pl-5 font-semibold">
        Calculators and Formulas
      </h2>
      <SearchBar />
      <FilterPill />
    </div>
  );
};

export default Home;
