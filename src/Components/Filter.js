import React, { useContext } from "react";
import { FilterItem } from "../Components/FilterItem";
import TagsJson from "../data/tags.json";
import { FiltersContext } from "./FiltersContext";

export const Filter = ({ setActualPage }) => {
  // Se acomoda el orden en el cual se van a posicionar los filtros:
  let asignedFilters = TagsJson.map((tag) => {
    if (tag.position === 0) tag.position = tag.id;
    return tag;
  });
  // Se acomoda el orden en el cual se van a posicionar los filtros:
  let orderedFilters = asignedFilters.sort((a, b) =>
    a.position > b.position ? 1 : -1
  );
  // Se agregan los componentes:
  let filtersContainer = orderedFilters.map((tag) => {
    return (
      <FilterItem
        key={tag.name}
        name={tag.name}
        id={tag.id}
        setActualPage={setActualPage}
      />
    );
  });
  console.log(filtersContainer);

  // Se accede a la información del contexto:
  const { filters, setFilters } = useContext(FiltersContext);

  const resetFilters = () => {
    let deactivatedFilters = [...filters];
    for (let filter in deactivatedFilters) {
      deactivatedFilters[filter] = false;
    }
    setFilters(deactivatedFilters);
    setActualPage(1);
    console.log(filters);
    console.log(":)")
      
    
  };

  return (
    <>
      <button onClick={resetFilters}>Reset filters </button>
      <form>{filtersContainer}</form>;
    </>
  );
};
