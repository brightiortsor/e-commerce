import styled from "styled-components";
import { newProducts } from "../pages/Data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;
const Products = () => {
  const products = newProducts.map((item) => (
    <Product item={item} key={item.id} />
  ));
  return <Container>{products}</Container>;
};

export default Products;
