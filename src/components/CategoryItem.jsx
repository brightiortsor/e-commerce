import styled from "styled-components";
import { mobile } from "../MediaQuery";

const Container = styled.div`
flex: 1;
margin: 2px 5px;
height: 40vh;
position: relative;
${mobile({marginTop: "2.5rem", padding: "0 5px"})}
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
opacity: 0.8;
border: 2px solid lightgray;
border-radius: 10px;
${mobile({height: "30vh"})}
`;

const Info = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h2`
color: #0e0b0b;
margin-bottom: 20px;
padding: 2px;
`;

const Button = styled.button`
border: none;
padding: 10px;
font-weight: 500;
background-color: #2b2727;
color: white;
border-radius: 5px;
cursor: pointer;
transition: all 0.5s ease;
&:hover{
  transform: scale(1.1);
}
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
<Image src={item.img}/>
<Info>
  <Title>{item.title}</Title>
  <Button>SHOP NOW</Button>
</Info>
    </Container>
  );
};

export default CategoryItem;
