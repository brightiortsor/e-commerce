import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 40px;
  margin-top: 2rem;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const Text = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-right: 10px;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProdName = styled.div`
  margin-bottom: 1rem;
`;

const ProdId = styled.div`
  margin-bottom: 1rem;
`;

const ProdColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 1rem;
`;

const ProdSize = styled.div``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Amount = styled.div`
  font-size: 1.5rem;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 1rem 0;
`;
const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>MY CART</Title>
        {/* Continue and Stop shopping buttons */}
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <Text>Shopping Bag (3)</Text>
            <Text>Wishlist (1)</Text>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>

        {/* product details container */}
        <Bottom>
          <Info>
            {/* Product I */}
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1604001307862-2d953b875079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhbmVsJTIwYmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <Details>
                  <ProdName>
                    <b>Product:</b> Chanel 94ed
                  </ProdName>
                  <ProdId>
                    <b>ID No:</b> 00654
                  </ProdId>
                  <ProdColor color="#d9bbab" />
                  <ProdSize>
                    <b>Size:</b> 12
                  </ProdSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <PriceContainer>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </PriceContainer>
                <ProductPrice>N14,500</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            {/* Product II */}
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1652689223597-8cecc8cc3968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHx3b21lbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                <Details>
                  <ProdName>
                    <b>Product:</b> Deadpool
                  </ProdName>
                  <ProdId>
                    <b>ID No:</b> 00698
                  </ProdId>
                  <ProdColor color="#bf3b65" />
                  <ProdSize>
                    <b>Size:</b> 29
                  </ProdSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <PriceContainer>
                  <Add />
                  <Amount>1</Amount>
                  <Remove />
                </PriceContainer>
                <ProductPrice>N199,999</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          {/* Summary of shopped items */}
          <Summary></Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
