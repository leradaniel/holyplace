import React from "react";

export const Paginacion = ({ page, totalPages, onChange }) => {

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

  return (
    // <>
    //   Página {page + 1} de {totalPages}
    //   {getPages()}
    // </>
    <div className="topbar-filter">
    <div className="pagination2">
      <span>
        Página {page} de {totalPages}:
      </span>
      {/* Esto llama a la función que devuelve los links de las páginas y lo muestra: */}
      {getPages()}
    </div>
  </div>
  );
};
