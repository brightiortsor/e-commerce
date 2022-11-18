import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  WhatsApp,
} from "@mui/icons-material";
import styled from "styled-components";
import logo from "../Images/logo.JPG";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Image = styled.img`
  width: 25%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Desc = styled.p`
  font-family: cursive;
  margin-top: -10px;
`;

const Socials = styled.div`
  display: flex;
`;

const Icons = styled.div`
  cursor: pointer;
  width: 35px;
  height: 35px;
  color: white;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 1rem 0 0;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  cursor: pointer;
  font-family: Cochin;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: Cochin;
`;

const Payment = styled.img`
  width: 50%;
  cursor: pointer;
  margin-left: -10px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Image src={logo} />
        <Desc>...simply elegant.</Desc>
        <Socials>
          <Icons color="#3b5999">
            <Facebook />
          </Icons>
          <Icons color="#e4405f">
            <Instagram />
          </Icons>
          <Icons color="green">
            <WhatsApp />
          </Icons>
        </Socials>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Dresses</ListItem>
          <ListItem>Shoes</ListItem>
          <ListItem>Bags</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>T & C</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "5px" }} /> Abuja, 90011, Nigeria.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "5px" }} /> +234 700 200 300
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "5px" }} /> cynkskollection@support.com
        </ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxzIRvWljJpyBTpNZbTUewlZ8CeI7lxxqUQ&usqp=CAU" />
      </Right>
    </Container>
  );
};

export default Footer;
