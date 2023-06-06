import { PlaceOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import img2 from '../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border: 1px solid #eee;
  flex: 1;
  max-width: calc(100% / 5);
  max-width: 280px;
  margin: 7px 0;
//   background:black;
  padding: 10px 0;
  cursor: pointer;
  transition: 1s all;

  &:hover {
    transform: scale(1.04);
  }
`;
   const ImgCon = styled.div`
//    width:200px;
//   max-width
`
const Img = styled.img`
width:100%;
`
const Details = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  color: black;
`;
const DetailsNameText = styled.span`
   font-size:17px;
   margin:5px 0;
   color:black;
`
const DetailsPriceText = styled.span`
margin:5px 0;
font-size:17px;
  color:${props=>props.type==='condition' && 'grey'}
`
const Condition = styled.div`
   background:#eee;
   border-radius:3px;
   padding:10px;
`
const ConditionText = styled.span`
  margin: 5px 0;
`;

function Product3() {
  return (
    <Link to='/vehicle/d' >
    <Container>
        <ImgCon>
        <Img src={img2} />
        </ImgCon>
        <Details className='flex aifs jcc fdc' >
            <DetailsNameText>Lamborghini Aventador 305</DetailsNameText>
            <DetailsPriceText>$ 375,00</DetailsPriceText>
            <DetailsPriceText type='condition' className='flex aifs jcfs' >
                <PlaceOutlined/>
                Nigeria,Lagos
            </DetailsPriceText>
            <Condition className='flex aic jcc'>
                <ConditionText>
                    Brand New
                </ConditionText>
            </Condition>
        </Details>
     </Container>
     </Link>
  )
}

export default Product3