import { Close, FacebookRounded, InsertLink, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import {useState} from 'react'
import styled from "styled-components";
const Container = styled.div`
   position:fixed;
   left:40px;
   bottom:50px;
   z-index:100;
`;
const Wrapper = styled.div``;
const IconCon = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:50%;
   color:${props=>props.cl ==='black' ? 'black' : 'white'};
   cursor:pointer;
   width:50px;
   height:50px;
   background-color:${props=>props.bg};
   margin:2px 0;
`;

function Link() {

  const[showIcon,setShowIcon]=useState(false)

  return (
    <Container>
      <Wrapper className='flex aic jcc fdc' >
        {showIcon &&
        <IconCon bg='#ff0000' >
            <Instagram/>
        </IconCon>
        }
        {showIcon &&
        <IconCon bg='#0000ff' >
            <FacebookRounded/>
        </IconCon>
        }
        {showIcon &&
            <IconCon bg='white' cl='black' >
            <LinkedIn/>
        </IconCon>
        }
        {showIcon &&
        <IconCon bg='#15d45b' >
            <WhatsApp/>
        </IconCon>
        }
        <IconCon bg='orangered' >
            {showIcon  ? <Close onClick={()=>setShowIcon(false)} /> : 
            <InsertLink onClick={()=>setShowIcon(true)}/>
             }
        </IconCon>

      </Wrapper>
    </Container>
  );
}

export default Link;
