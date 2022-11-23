import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../MediaQuery";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 40px;
  margin-top: 2rem;
  ${mobile({ padding: "5px", marginTop: "2.5rem" })}
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

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

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
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
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
  ${mobile({ marginTop: "1rem" })}
`;
const Amount = styled.div`
  font-size: 1.5rem;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  ${mobile({ marginBottom: "10px", fontSize: "2rem" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 1rem 0;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
  ${mobile({ fontSize: "2.5rem" })}
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const ItemText = styled.span``;
const ItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: black;
  font-weight: 500;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>MY CART</Title>
        {/* Continue and Stop shopping buttons */}
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <Text>Shopping Bag (3)</Text>
            <Text>Wishlist (1)</Text>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
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
                    <b>Size:</b> M
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
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <ItemText>Subtotal</ItemText>
              <ItemPrice>N399,999</ItemPrice>
            </SummaryItem>
            <SummaryItem>
              <ItemText>Shipping Fee</ItemText>
              <ItemPrice>N9,999</ItemPrice>
            </SummaryItem>
            <SummaryItem>
              <ItemText>Shipping Discount</ItemText>
              <ItemPrice>- N9,999</ItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <ItemText>Total</ItemText>
              <ItemPrice>N390,000</ItemPrice>
            </SummaryItem>
            <Button>BUY NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
