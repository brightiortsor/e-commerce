import React from "react";
import styled from "styled-components";
import { mobile } from "../MediaQuery";

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
`;

const FlashSales = () => {
  return (
    <Container>
      December Flash Sales! Get upto 5% off.
    </Container>
  );
};

export default FlashSales;
