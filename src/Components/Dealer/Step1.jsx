import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color:black;
  background:whitesmoke;
   padding-bottom:60px;
  `;
const Wrapper = styled.div``;
const Header = styled.div`
  padding: 20px 20px;
`;
const HeaderText = styled.div`
  color: black;
  font-size:22px;
  font-weight:400;
`;

const InputWrapper = styled.div`
   padding:0 20px;
`
const InputCon = styled.div`
  margin:8px 0;
`
const Input = styled.input`
   border:1px solid grey;
   outline:none;
   margin:8px 0;
   &:focus{
    border:orangered;
   }
`
const InputLabel = styled.span`
   font-weight:${props=>props.fw==='light' ? '' : 500}
`
const InputLabelText = styled.span`
   font-size:16px;
   margin:6px 0;
`
const InputLabelSml = styled.span`
   font-size:12px;
`

const Select = styled.select`
   outline:none;
`
const Option = styled.option``
const ButtonCon = styled.div`
   margin-top:50px;
`

function Step1() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderText>Add Seller Account Information</HeaderText>
        </Header>
      </Wrapper>
      <InputWrapper>
        <InputCon className="flex aifs jcfs fdc">
          <InputLabel>Dealer Name*</InputLabel>
          <Input />
          <InputLabelSml>
            Choose a unique name for your online shop this is the name that will
            appear on the Karbox marketplace! It is forbidden to use a
            registered trademark in your shop name without the brand
            authorization.
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabelText>
            Please select if you`re an individual or Business Entity/Company
          </InputLabelText>
          <Select>
            <Option>-Choose an option</Option>
            <Option>Individual</Option>
            <Option>Registered</Option>
            <Option>Company</Option>
          </Select>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Account Manager First and Last Name*</InputLabel>
          <Input />
          <InputLabelSml>
            Your name or the name of the person in your team who will manage
            your account.This is the contact we will primarly use to contact you
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel fw="light">Account Manager phone number*</InputLabel>
          <Input />
          <InputLabelSml>
            When we need to contact you urgently,this is the number we will
            call.
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel fw="light">Additional Phone number</InputLabel>
          <Input />
          <InputLabelSml>Another number we can reach you</InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Email Address*</InputLabel>
          <Input />
          <InputLabelSml>
            Your account will be linked to this email address and we will use it
            to send all our communications.
          </InputLabelSml>
          <InputLabelSml></InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Retype Email Adress*</InputLabel>
          <Input />
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Password*</InputLabel>
          <Input />
          <InputLabelSml>
            At least 8 characters containing a capital letter and a numeric
            character
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Retype Password*</InputLabel>
          <Input />
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>E-Contract Karbox Nigeria*</InputLabel>
          <InputLabel fw="light">
            <Input type="checkbox" style={{margin:'0 5px',cursor:'pointer'}} />I have read and accepted the{" "}
            <InputLabel fw="light" style={{ color: "#4c6ebe" ,fontSize:'13px'}}>
              E-Contract Karbox Nigeria
            </InputLabel>
          </InputLabel>
        </InputCon>
      </InputWrapper>
      <ButtonCon className='flex aic jcc' >
        <Link className="flex aic jcc link">
           <Button variant='contained' >Start Selling</Button>
        </Link>
      </ButtonCon>
    </Container>
  );
}

export default Step1;
