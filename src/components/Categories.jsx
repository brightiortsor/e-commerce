import styled from "styled-components";
import { categories } from "../pages/Data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  const categoryArr = categories.map((item) => 
  <CategoryItem item={item} key={item.id}/>);
  return <Container>{categoryArr}</Container>;
};

export default Categories;
