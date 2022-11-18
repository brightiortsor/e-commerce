import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 6rem 3rem 2.5rem 3rem;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 4rem;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 1.5rem 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 1.5rem 1.5rem 1.5rem 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.select`
  //margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;
const FilterSize = styled.select`
  padding: 5px;
  font-size: 16px;
`;
const FilterOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 0 5px;
  border: 1px solid teal;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://media.istockphoto.com/id/1317904826/photo/short-sleeve-hooded-sweatshirt-mockup-for-print-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=E2e7bC6kXMheEiy3kni0JFtZPW6AePLU7jPiNnOOfx4=" />
        </ImgContainer>
        <InfoContainer>
          <Title>Sleeved Hoodie</Title>
          <Desc>Class befits class with our all in one trendy wear.</Desc>
          <Price>N20,000</Price>
          <FilterContainer>
            <Filter>
              <FilterColor>
                <FilterOption disabled selected>
                  Color
                </FilterOption>
                <FilterOption>Black</FilterOption>
                <FilterOption>Blue</FilterOption>
                <FilterOption>White</FilterOption>
                <FilterOption>Red</FilterOption>
              </FilterColor>
            </Filter>
            <Filter>
              <FilterSize>
                <FilterOption disabled selected>
                  Size
                </FilterOption>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>XL</FilterOption>
                <FilterOption>XXL</FilterOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
