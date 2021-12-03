import { ProductItem } from "./ProductItem";
import ProductsJson from "../data/products.json";
const Products = () => {
  let productsList = ProductsJson;
  return (
    <>
      <h1>Productos</h1>

      {productsList.map((product) => {
        return (
          <ProductItem
            key={product.name}
            name={product.name}
            id={product.id}
            tags={product.tags}
          />
        );
      })}
    </>
  );
};

export default Products;
