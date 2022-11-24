import styled from "styled-components";
import { landscape, mobile, tablet } from "../MediaQuery";
import { categories } from "../pages/Data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding: "0", flexDirection: "column", marginTop: "1rem"})}
  ${tablet({padding: "5px 15px", flexDirection: "column", marginTop: "1rem"})}
  ${landscape({marginTop: "1rem", flexDirection: "column", padding: "5px 10px"})}
`;

const Categories = () => {
  const categoryArr = categories.map((item) => 
  <CategoryItem item={item} key={item.id}/>);
  return <Container>{categoryArr}</Container>;
};

export default Categories;
