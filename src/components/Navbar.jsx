import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
//import logo from "../Images/logo.JPG";
import { mobile } from "../MediaQuery";
import { Link } from "react-router-dom";


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
  ${mobile({display: "none"})}
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
  ${mobile({marginLeft: "10px", fontSize: "16px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: "3", justifyContent: "space-evenly", alignItems: "center", marginTop: "2px"})}
`;

const Logo = styled.h2`
  font-weight: bold;
  font-family: Cambria, serif;
  ${mobile({fontSize: "18px"})}
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
          <Logo>CynksKollection</Logo>
        </Center>
        <Right>
        <Link to="/" className="link-item">
          <MenuItem >HOME</MenuItem>
          </Link>
          <Link to="/register" className="link-item">
          <MenuItem >SIGN UP</MenuItem>
          </Link>
         <Link to="/login" className="link-item">
         <MenuItem>SIGN IN</MenuItem>
         </Link>
          
          <MenuItem >
            <Badge badgeContent={2} color="primary" >
             <Link to="/mycart" className="link-item"><ShoppingCartOutlined /></Link> 
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
