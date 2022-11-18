import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf5f5;
  height: 40vh;
`;
const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  border: 1px solid gray;
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  font-size: 16px;
  flex: 8;
  text-indent: 20px;
`;
const Button = styled.button`
  background-color: teal;
  color: white;
  border: none;
  flex: 1;
  cursor: pointer;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Get Updates</Title>
      <Desc>Be the first to know about new products.</Desc>
      <InputContainer>
        <Input placeholder="example@mail.com" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
