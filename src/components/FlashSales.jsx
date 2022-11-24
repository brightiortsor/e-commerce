import React from "react";
import styled from "styled-components";
import { landscape, mobile, tablet } from "../MediaQuery";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({marginTop: "2.8rem", marginBottom: "-3rem"})}
  ${tablet({marginTop: "2.8rem", fontSize: "1.2rem"})}
  ${landscape({marginTop: "2.8rem", fontSize: "1.2rem"})}
`;

const FlashSales = () => {
  return (
    <Container>
      December Flash Sales! Get upto 5% off.
    </Container>
  );
};

export default FlashSales;
