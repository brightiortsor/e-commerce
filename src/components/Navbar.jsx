import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.JPG";
import { mobile } from "../MediaQuery";


const Container = styled.div`
  height: 15px;
  ${mobile({height: "10px"})}
 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #99a8a8;
  ${mobile({padding: "10px 0"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  ${mobile({margin: "5px", padding: "2px"})}
`;
const Input = styled.input`
  outline: none;
  border: none;
  background-color: #99a8a8;
  ${mobile({width: "50px"})}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: "2", justifyContent: "center"})}
`;

const Logo = styled.h2`
  font-weight: bold;
  font-family: Cambria, serif;
  ${mobile({fontSize: "18px"})}
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-family: Cambria, serif;
  ${mobile({fontSize: "12px", marginLeft: "7px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "lightgray", fontSize: 16, }} />
          </SearchContainer>
        </Left>
        <Center>
          {/* <LogoImg src={logo} /> */}
          <Logo>CynksKollection</Logo>
        </Center>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem >
            <Badge badgeContent={3} color="primary" >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
