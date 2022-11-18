import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Hero = () => {
  return (
    <Container>
      December Flash Sales! Get upto 30% off on some products.
    </Container>
  );
};

export default Hero;
