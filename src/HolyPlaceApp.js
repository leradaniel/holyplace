import React, {useState} from "react";
import { FiltersContext } from "./Components/FiltersContext";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Maintenance from "./Components/Maintenance";
import TagsJson from "./data/tags.json";

const HolyPlaceApp = () => {
  // Contexto para filtrado de prodcutos: Array inicial del estado
  const initFilters = () => {
    let tagsActive = TagsJson.map(() => {
      return false;
    });
    return tagsActive;
  };
  // Estado para compartir información
  const [filters, setFilters] = useState(initFilters);
  //console.log(filters);

  return (
    <>
      <Navbar />

      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Maintenance />
        {/* <Products /> */}
      </FiltersContext.Provider>
    </>
  );
};

export default HolyPlaceApp;
