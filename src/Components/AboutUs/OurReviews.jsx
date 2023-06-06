import { Rating } from '@mui/material';
import styled from 'styled-components';
import { Client_Reviews } from '../../data';
import { tablet } from '../../responsive';

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 7px;
`;
const TopContainer = styled.div`
`
const TopContainerTxtCon=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
`
const TopContainerTxt=styled.p`
  font-size:${props=>props.fz};
  font-weight:${props=>props.fw};
  margin-bottom:${props=>props.mb};
`

const BottomContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
`
const BottomCon = styled.div`
    margin-top:50px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
    flex:1;

`
const ClientReviews = styled.div`
   align-items:center;
   justify-content:space-between;
   flex-direction:column;
   border-radius:10px;
   box-shadow: -1.04px 2.891px 10px 0px rgb(69 49 183 / 50%);
   max-width:300px;
   margin:10px 15px;
  padding-bottom:15px;
`

const ClientReviewsTopCon = styled.div`
   flex:1;
`
const ClientReviewsTxtCon = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:center;
   text-align:left;
   padding:30px;
   ${tablet({padding:'15px'})}
   box-sizing:border-box;
`

const ClientReviewsTxt = styled.p`
   font-size:16px;
   color:darkslategrey;
`
const HR = styled.hr`
   border:none;
   background-color:#eee;
   height:1px;
   width:100%;
`

const ClientReviewsBottomCon = styled.div`
   width:100%;
   flex:1;
   display:flex;
   align-items:center;
   justify-content:center;
`
const ClientReviewsBottomConLeft = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex:1;
    // margin-right:5px;
`
const ClientImgCon = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`
const ClientImg = styled.img`
   border-radius:50%;
   height:60px;
   width:60px;
`

const ClientReviewsBottomConRight = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex:1;
    flex-direction:column;
`
const ClientNameCon = styled.div`
   white-space:nowrap;
`
const ClientName= styled.p`
   font-size:17px;
`
const ClientRatingCon = styled.div`
   
`

function OurReviews() {
  return (
      <Container className="bgw OurReviews">
        <TopContainer className="OurReviewsTopCon">
          <TopContainerTxtCon className="OurReviewsTxtCon">
            <TopContainerTxt
              className="OurReviewsTxt"
              fz="39px"
              fw={700}
              mb="10px"
            >
              Don’t Just Take Our Word For It!
            </TopContainerTxt>
          </TopContainerTxtCon>
          <TopContainerTxtCon className="OurReviewsTxtCon">
            <TopContainerTxt className="OurReviewsTxt" fz="17px">
              Our hard work is paying off. Great reviews from amazing customers
            </TopContainerTxt>
          </TopContainerTxtCon>
        </TopContainer>
        <BottomContainer className="OurReviewsTopCon">
          <BottomCon>
              {Client_Reviews.map((item, i) => (
                  <ClientReviews key={i} >
                    <ClientReviewsTopCon>
                      <ClientReviewsTxtCon>
                        <ClientReviewsTxt>{item.ClientReview}</ClientReviewsTxt>
                      </ClientReviewsTxtCon>
                    </ClientReviewsTopCon>
                    <HR />
                    <ClientReviewsBottomCon>
                      <ClientReviewsBottomConLeft>
                        <ClientImgCon>
                          <ClientImg src={item.img} />
                        </ClientImgCon>
                      </ClientReviewsBottomConLeft>
                      <ClientReviewsBottomConRight>
                        <ClientNameCon>
                          <ClientName>Alexis Moore</ClientName>
                        </ClientNameCon>
                        <ClientRatingCon>
                          <Rating
                            name="read-only"
                            value={item.ClientRating}
                            readOnly
                          />
                        </ClientRatingCon>
                      </ClientReviewsBottomConRight>
                    </ClientReviewsBottomCon>
                  </ClientReviews>
                // </SwiperSlide>
              ))}
            {/* </Slider> */}
            {/* </Slider> */}
          </BottomCon>
        </BottomContainer>
      </Container>
  );
}

export default OurReviews