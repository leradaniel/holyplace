import { ProductItem } from "./ProductItem";
import ProductsJson from "../data/products.json";
import { Filter } from "./Filter";
import React, { useContext } from "react";
import { FiltersContext } from "../Components/FiltersContext";

const Products = () => {
  // Se accede a la información del contexto:
  const { filters } = useContext(FiltersContext);

  // Función que devuelve los productos que se van a mostrar:
  const getProducts = (productList) => {
    // Se hace un filtrado de ser necesario:
    if (checkMustFilter()) {
      // Se recorren los productos y se filtran los activos:
      let filteredProducts = ProductsJson.filter((product) => {
        // Valor de retorno incial
        let returnValue = true;
        // Array con todas las categorias del producto actual:
        const productCategories = product.tags.split("/");
        // Se recorren todas las categorias del filtrado:
        for (let filter in filters) {
          // Si la categoria del filtrado está activa:
          if (filters[filter] === true) {
            // Se obtiene el valor real:
            let catNum = (Number(filter) + 1).toString();
            // Se deshabilita si el producto no tiene la categoria activa:
            if (!productCategories.includes(catNum)) {
              returnValue = false;
            }
          }
        }
        return returnValue;
      });
      // Se devuelven los productos filtrados:
      return filteredProducts;
    } else {
      // Si no hace falta un filtrado, se devuelven los productos originales:
      return productList;
    }
  };

  // Función que devuelve un booleano indicando si hace falta un filtrado
  const checkMustFilter = () => {
    // Se recorren todos los filtros. Si hay por lo menos uno activo, se devuelve true:
    for (let filter of filters) {
      if (filter === true) return true;
    }
    return false;
  };

  // Se establecen los productos actuales (con filtrado previo si hace falta):
  let products = getProducts(ProductsJson);

  // Se preparan los productos activos que van a ser renderizados:
  let productsContainer = products.map((product) => {
    const categories = product.tags.split("/");
    return (
      <ProductItem
        key={product.name}
        name={product.name}
        id={product.id}
        tags={categories}
      />
    );
  });

  return (
    <>
      <h1>Productos</h1>
      <Filter />
      {productsContainer}
    </>
  );
};

export default Products;
