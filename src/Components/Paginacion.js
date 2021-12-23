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
      <div className="pages-bottom">
        {getPages()}
        <div>
          Página {page} de {totalPages}:
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
