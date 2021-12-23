import React from "react";

export const Paginacion = ({ page, totalPages, onChange, disabled }) => {
  const getPages = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      let realPage = i + 1;
      pages.push(
        <button
          
          key={i}
          onClick={() => onChange(realPage)}
          className={"btn btn-primary" + (page === realPage ? " active" : "")}
        >
          {realPage}
        </button>
      );
    }
    return pages;
  };

  if (disabled === false) {
    return (
      <div disabled={disabled}>
        <span>
          Página {page} de {totalPages}:
        </span>
        {getPages()}
      </div>
    );
  } else {
    return <></>;
  }
};
