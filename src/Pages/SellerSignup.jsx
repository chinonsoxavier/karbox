import { ArrowRight } from '@mui/icons-material'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import Step1 from '../Components/Dealer/Step1'
import Header from '../Components/Home/Header'
import { tablet } from '../responsive';
// import Step1 from '../Components/Dealer/Step1'

const Container = styled.div`
   background:white;
   //    padding-bottom:80px;
   `
   const Wrapper = styled.div`
   padding:0 14vh;
   margin-bottom:20px;
//    padding-bottom:80px;
${tablet({ padding: "0 4vh" })}
`
const Navbar = styled.div`

`
const HeaderTop = styled.div`
  background: black;
  // padding: 0 14vh;
  box-sizing: border-box;
`;
const HeaderBottom = styled.div`
  //  padding:10px 14vh  ;
   margin:15px 0;
   box-sizing:border-box;
`
const HeaderBigText = styled.span`
   font-size:26px;
   font-weight:${props=>props.fw}
`
const HeaderText = styled.span`
  font-size: 26px;
  color:${props=>props.cl};
`;
const Hr = styled.hr`
   height:1px;
   border:none;
   background:gray;

`

const BigTextCon = styled.div`
  text-overflow: ellipsis;
`;
const BigText = styled.span`
   font-size:19px;
   font-weight:400;
   text-align:center;
   
  text-overflow: ellipsis;
   ${tablet({fontSize:'17px'})}
`
const SmText = styled.span``
const ProgressStepsCon = styled.div`
//    margin-top:15px;
`
const ProgressStepsText = styled.span``;
const ProgressSteps = styled.div``;
// const SmText = styled.span``


function SellerSignup({ route }) {
  const [step, setStep] = useState(route);
  const [newroute, setNewroute] = useState();

  useEffect(() => {
    setNewroute(step);
  }, [route])
  

  return (
    <Container>
      <Wrapper>
        <Navbar className=" aic jcsb fdc w100 bsbb p014vh">
          <HeaderTop className="flex aic jcsb w100">
        <Header/>
      </HeaderTop>
            {/* <HeaderBigText className="flex aic jcc" fw={500}>
              SELLER
              <HeaderBigText fw={300}>CENTER</HeaderBigText>
            </HeaderBigText>
            <HeaderText cl="#909fbd">KarBox</HeaderText> */}
          {/* <Hr /> */}
          <HeaderBottom className="flex aifs jcfs w100 fdc">
            <BigTextCon >
            <BigText className="flex aifs jcfs w100 v">
              Register and start selling today-create your own seller account
            </BigText>
            </BigTextCon>
          </HeaderBottom>
        </Navbar>
        <ProgressStepsCon className="flex aifs jcfs w100 ">
          <ProgressSteps>
            <ProgressStepsText
              className="flex aic jcc c"
              style={{ color: "#4c6ebe" }}
            >
              Seller Account
              <ArrowRight />
            </ProgressStepsText>
          </ProgressSteps>
        </ProgressStepsCon>
      <Step1 />
      </Wrapper>
    </Container>
  );
}

export default SellerSignup