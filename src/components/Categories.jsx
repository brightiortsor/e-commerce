import styled from "styled-components";
import { mobile } from "../MediaQuery";
import { categories } from "../pages/Data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding: "0", flexDirection: "column", marginTop: "1rem"})}
`;

const Categories = () => {
  const categoryArr = categories.map((item) => 
  <CategoryItem item={item} key={item.id}/>);
  return <Container>{categoryArr}</Container>;
};

export default Categories;
