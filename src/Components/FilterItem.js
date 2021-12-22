import React, { useContext, useEffect, useState } from "react";
import { FiltersContext } from "./FiltersContext";

export const FilterItem = ({ name, id, setActualPage}) => {
  // Se accede a la información del contexto:
  const {filters, setFilters} = useContext(FiltersContext);

  // Estado que indica si el checkbox está activo o no:
  const [checked, setChecked] = useState(false)

  // Referencia al estado actual del filtro que corresponde.
  // Se crea cada vez que se re-renderiza:
  let filterRef = filters[id - 1];
  
  // Según la id que se clickea, se activa/desactiva un filtro:
  function handleClick(cb) {
    // Para no mutar el estado, hay que modificarlo en un array nuevo:
    let newFilters = [...filters];
    newFilters[id - 1] = !newFilters[id - 1];
    setFilters(newFilters);
    // Cada vez que modifica un filtro, se vuelve a la página 1:
    setActualPage(1);
  }

  //Cuando la referencia al filtro cambia, 
  useEffect(()=>{
    setChecked(filterRef);
  }, [filterRef]);

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleClick} checked={checked} />
        {name}
      </label>
    </>
  );
};
