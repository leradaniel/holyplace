import React, { useContext } from "react";
import { FilterItem } from "../Components/FilterItem";
import TagsJson from "../data/tags.json";
import { FiltersContext } from "./FiltersContext";

export const Filter = ({ setActualPage }) => {
  const filterNames = ["Colores", "Tipo", "Temática"];

  // Se asigna el número de orden de los filtros:
  let asignedFilters = TagsJson.map((tag) => {
    if (tag.position === 0) tag.position = tag.id;
    return tag;
  });

  // Se acomoda el orden en el cual se van a posicionar los filtros:
  let orderedFilters = asignedFilters.sort((a, b) =>
    a.position > b.position ? 1 : -1
  );

  // Se crea un array que separa los tipos de filtros.
  // Cada tipo de filtro es un array con los filtros que coinciden con ese tipo
  let filtersContainer = [];

  // Se recorren los filtros ordenados
  for (const filter in orderedFilters) {
    // Referencia al filtro recorrido actualmente
    let filterRef = orderedFilters[filter];
    // Si el array correspondiente al tipo no existe, lo crea
    if (filtersContainer[filterRef.type - 1] === undefined)
      filtersContainer[filterRef.type - 1] = [];
    // Se pushea el filtro que después se va a renderizar:
    filtersContainer[filterRef.type - 1].push(
      <FilterItem
        key={filterRef.name}
        name={filterRef.name}
        id={filterRef.id}
        setActualPage={setActualPage}
      />
    );
  }

  // Lo que envuelve a todos los botones de filtro
  let filtersWrapper = [];

  for (const filter in filtersContainer) {
    filtersWrapper.push(
      <div key={filter} className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {filterNames[filter]}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {filtersContainer[filter]}
        </ul>
      </div>
    );
  }

  // Se accede a la información del contexto:
  const { filters, setFilters } = useContext(FiltersContext);

  // Función que se encarga de reiniciar los filtros
  const resetFilters = () => {
    let deactivatedFilters = [...filters];
    for (let filter in deactivatedFilters) {
      deactivatedFilters[filter] = false;
    }
    setFilters(deactivatedFilters);
    setActualPage(1);
  };

  return (
    <>
      {/* <form>{filtersContainer}</form>; */}
      {filtersWrapper}

      <button className="btn btn-primary" onClick={resetFilters}>
        Reiniciar filtros
      </button>
    </>
  );
};
