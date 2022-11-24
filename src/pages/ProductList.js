import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../MediaQuery";

const Container = styled.div``;
const Title = styled.h1`
  margin: 3rem 0 0 1.5rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ marginBottom: "10px" })}
`;
const Filter = styled.div`
  margin: 1.5rem;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0", marginBottom: "5px" })}
`;
const Select = styled.select`
  padding: 5px;
  //margin-right: 5px;
  ${mobile({ margin: "10px 0px 15px 5px" })}
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Flowered</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price: Lowest</Option>
            <Option>Price: Highest</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
