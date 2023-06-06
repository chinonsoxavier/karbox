import styled from "styled-components";
import { mobile } from "../responsive";
// import JumiaStar from '.././images/jumia_star.png'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fz};
  margin:5px 0;
`;

const Form = styled.form`
  display: flex;
  // flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 100%;
  // margin: 20px 10px 0px 0px;
  margin: 20px 0;
  padding: 10px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid orangered;
  }
`;

const Agreement = styled.span`
  font-size: 10px;
  margin: 20px 0px;
  min-width:20%;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  border: none;
  padding: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const JumiaStar_Img = styled.img`
    max-width:15%;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        {/* <JumiaStar_Img src={JumiaStar} alt=''/> */}
        <Title  fz='15px' fw={500}>Create your account</Title>
        <Title  fz='13px' fw={300}>Let`s get started by creating your account</Title>
        <Title  fz='13px' fw={300}>To keep your account safe, we need a safe password</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Button>Continue</Button>
          <Agreement>
           For further support you may visit our help center or contact or customer service team  <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
