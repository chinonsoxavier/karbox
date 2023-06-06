import { SmartToyOutlined } from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
  position:fixed;
  bottom:0;
  right:100px;
  padding:2px 16px ;
  background:orangered;
  color:white;
  cursor:'pointer'
`;
const Wrapper = styled.div``;
function MinChatbox({setShowChatbox}) {
  return (
    <Container onClick={()=>setShowChatbox(true)} >
        <Wrapper className='flex aic jcc' >
            <SmartToyOutlined sx={{margin:'6px'}} />
            ROBOT
        </Wrapper>
    </Container>
  )
}

export default MinChatbox