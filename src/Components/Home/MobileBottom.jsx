import styled from "styled-components";
import {Home} from '@mui/icons-material'
import { lmobile } from "../../responsive";
import {Link} from 'react-router-dom'
const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: none;
  z-index: 100;
  height: 7vh;
  ${lmobile({ display: "block" })}
`;
const Wrapper = styled.div``;
const LinkCon = styled.div`
   padding:0 10px;
   box-sizing:border-box;
   flex:1;
   height:100%;
`

const LinkActive = styled.div`
  border-top:2px solid orangered;
  width:100%;
`;

function MobileBottom() {
  return (
    <Container className="w100 bgw ">
      <Wrapper className="flex aic jcsb w100">
        <Link className="link" to="/">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <Home />
            Home
          </LinkCon>
        </Link>
        <Link className="link" to="/account">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <Home />
            Account
          </LinkCon>
        </Link>
        <Link className="link" to="/inventory">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <Home />
            Inventory
          </LinkCon>
        </Link>
        <Link className="link" to="/models">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <Home />
            Models
          </LinkCon>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default MobileBottom;
