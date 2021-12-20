import React from "react";

export const ProductItem = ({ name, id, tags }) => {
  let picName = "product-" + id + ".jpg";
  return (
    <div className="card">
      <img
        className="product-image"
        src={`/assets/products/${picName}`}
        alt="Texto"
      />
      <p className="product-title">{name}</p>
    </div>
  );
};
