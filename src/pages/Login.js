import styled from "styled-components";
import { mobile } from "../MediaQuery";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 3rem;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1604025940862-ee1fa5d60347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhbmVsJTIwYmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 30px;
  background: #fff;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
  font-size: 14px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  margin: 20px 0;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  font-size: 12px;
  margin: 10px 0;
  color: darkblue;
  text-decoration: underline;
  margin-right: 5px;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
        </Form>
        <Link>Forgot Password?</Link>
        <Link> Sign-up here</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
