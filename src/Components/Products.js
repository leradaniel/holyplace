import { ProductItem } from "./ProductItem";
import ProductsJson from "../data/products.json";
import { Filter } from "./Filter";
import React, { useContext, useState } from "react";
import { FiltersContext } from "../Components/FiltersContext";
import { Paginacion } from "./Paginacion";

const Products = () => {
  // Se accede a la información del contexto:
  const { filters } = useContext(FiltersContext);
  // Se indica si hay que mostrar la numeración de páginas
  let disablePages = false
  // Estado con las páginas:
  const [actualPage, setActualPage] = useState(1);

  // Elementos que se muestran por página:
  const [totalProductsPerPage, setTotalProductsPerPage] = useState(9);

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

  const getTotalPages = () => {
    let pagesNumber = Math.ceil(products.length / totalProductsPerPage);
    pagesNumber > 1 ? disablePages=false : disablePages=true;
    console.log(disablePages)
    return pagesNumber;
  };

  let prodcutsPerPage = products.slice(
    (actualPage - 1) * totalProductsPerPage,
    actualPage * totalProductsPerPage
  );

  // Se preparan los productos activos que van a ser renderizados:
  let productsContainer = prodcutsPerPage.map((product) => {
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

  const changeProductsPerPage = (maxProducts) => {
    setTotalProductsPerPage(maxProducts);
    setActualPage(1);
  };

  return (
    <>
      <h1>Productos</h1>
      <Filter setActualPage={setActualPage} />

      <Paginacion
        page={actualPage}
        totalPages={getTotalPages()}
        onChange={(page) => setActualPage(page)}
        disabled={disablePages}
      />

      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Productos por página: {totalProductsPerPage}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(9);
              }}
            >
              9
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(18);
              }}
            >
              18
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(27);
              }}
            >
              27
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(36);
              }}
            >
              36
            </button>
          </li>
        </ul>
      </div>
      <div className="card-deck">{productsContainer}</div>
    </>
  );
};

export default Products;
