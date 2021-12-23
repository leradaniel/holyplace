import React, { useState } from "react";

export const Paginacion = ({ page, totalPages, onChange, disabled }) => {
  //const [disabled, setDisabled] = useState(true);

  const getPages = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      let realPage = i + 1;
      pages.push(
        <a
          key={i}
          onClick={() => onChange(realPage)}
          className={page === realPage ? "active" : ""}
          href="#"
        >
          {realPage}
        </a>
      );
    }
    return pages;
  };

if (disabled === false)
{
  return (
    
    <div disabled={disabled}>
      <span>
        Página {page} de {totalPages}:
      </span>
      {/* Esto llama a la función que devuelve los links de las páginas y lo muestra: */}
      {getPages()}
    </div>
  );
}
else
{
  return<></>
}

  
};
