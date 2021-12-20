import React, { useContext } from "react";
import { FiltersContext } from "./FiltersContext";

export const FilterItem = ({ name, id }) => {
  // Se accede a la información del contexto:
  const {filters, setFilters} = useContext(FiltersContext);

  //Según la id que se clickea, se activa/desactiva un filtro:
  function handleClick(cb) {
    let newFilters = [...filters];
    newFilters[id - 1] = cb.target.checked;
    setFilters(newFilters);
  }

  return (
    <>
      <label>
        <input type="checkbox" onClick={handleClick} />
        {name}
      </label>
    </>
  );
};
