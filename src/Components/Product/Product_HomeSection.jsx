import {
  FacebookOutlined,
  Instagram,
  Apps,
  Twitter,
  WhatsApp,
  WifiCalling3Outlined,
  
} from "@mui/icons-material";
import React, { useState } from "react";

import styled from "styled-components";
import img from "../../images/auction-2.jpg";
import img2 from "../../images/auction-2.jpg";
import img3 from "../../images/auction-2.jpg";
import img4 from "../../images/auction-2.jpg";
import MakeOffer from "./MakeOffer";

const Container = styled.div``
const ProductHomeSectionCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  margin-bottom: 30px;
  background: white;
  padding-bottom: 30px;
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 27%);
`;



const ProductInfoCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap:wrap;
  flex-direction:column;
  width: 100%;
  // margin-top: 50px;
`;


const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageGalleryCon = styled.div`
  //  height:900px;
`
const ImageGallery= styled.div`
// height:600px;
position:relative;
`
const ImageGalleryImageCon = styled.div`
  // & :nth-child(n-1){
  //   width:40px;
  // }
  width:100%;
`;
const ImageGalleryImage= styled.img`
   width:100%;
`
const ImageGalleryButtonCon = styled.div`
position:absolute;
bottom:24px;
`
const ImageGalleryImageButton = styled.button`
  padding:8px;
  border:none;
  background:white;
  border-radius:4px;
`

const ImageSliderCon = styled.div``
const ImageSliderHeader = styled.div``
const ImageSliderHeaderLeft = styled.div``
const ImageSliderHeaderRight = styled.div``
const ImageSliderHeaderIcon = styled.div`
margin:0 7px;
`
const ImageSliderHeaderIconText = styled.span`
   text-decoloration:underline;
`
const ImageSliderWrapper = styled.div``
const ImageSlider = styled.div``
const ImageSliderImg = styled.img``

const ProductName = styled.h1`
  white-space: nowrap;
  font-size: 42px;
`;
const ProductInfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:15px 0;
`;
const ListingId = styled.p`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
`;
const HR = styled.div`
  border-right: 2px solid gray;
  height: 15px;
  width: 2px;
  margin: 8px;
`;
const ItemId = styled.p`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #ebf2ff;
  width: 100%;
  max-width:700px;
  // flex: 1;
  padding:15px;
  box-sizing: border-box;
`;

const ProductPriceLeft = styled.div`
  flex: 1;
  text-align: left;
`;

const ProductPriceRight = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  items-align: left;
  text-align: right;
  flex-direction: column;
`;

const ProductPriceLeftTxt = styled.p`
  text-align: left;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  color: ${(props) => props.cl};
`;

const AuctionTimeHr = styled.hr`
  border: none;
  background-color: #e0e0f1;
  width: ${(props) => props.wd};
  height: 1px;
  margin: ${(props) => props.mg};
`;

const ShowContactButtonCon = styled.div``
const ShowContactButton = styled.button`
  padding: 10px 40px;
  border: none;
  background: orangered;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
const MakeAnOfferButton = styled.button`
  padding: 10px 40px;
  border: 1px solid orangered;
  background: none;
  color: orangered;
  font-size: 14px;
  cursor: pointer;
`;

const SocialIconCon = styled.div``
const SocialIcon = styled.div`
  background: ${(props) => props.bg};
  color: white;
  padding: 8px 15px;
  margin:0 5px;
`;




const ProductHomeSection = ({ makeanoffer, setMakeanoffer }) => {

  const [makeoffer, setmakeoffer] = useState(false);
  const [showcontact, setshowcontact] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState({});
const [slide,setSlide]=useState(0)

  const image = [
    {
      id: 0,
      img: img,
    },
    {
      id: 1,
      img: img2,
    },
    {
      id: 2,
      img: img3,
    },
    {
      id: 3,
      img: img4,
    },
    {
      id: 4,
      img: img4,
    },
   
  ];
  const image2 = [
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 0,
      img: img,
    },
    {
      id: 1,
      img: img2,
    },
    {
      id: 2,
      img: img3,
    },
    {
      id: 3,
      img: img4,
    },
    {
      id: 4,
      img: img4,
    },
   
  ];
  return (
    <Container>
      {/* {show ? (
      
      ) : ( */}
        <ProductHomeSectionCon>
          <ProductInfoCon>
            {/* <ProductInfoLeftCon> */}
            <ProductInfo>
              <ProductInfoTop>
                <ProductName>The Breeze Zodiac IX</ProductName>
              </ProductInfoTop>
              <ImageGalleryCon className="flex aic jcc w100">
                <ImageGallery className="w100 flex aic jcc wrap flex1">
                  {image.map((item, i) => (
                    <>
                      {i === 0 && (
                        <ImageGalleryImageCon
                          style={{
                            maxWidth: "100%",
                            minWidth: "auto",
                            width: "max-content",
                            maxWidth: "515px",
                            padding: "0",
                          }}
                          className="w100 flex aic jcc wrap"
                        >
                          <ImageGalleryImage
                            src={require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg")}
                          />
                        </ImageGalleryImageCon>
                      )}
                    </>
                  ))}
                </ImageGallery>
                {/* </ImageGalleryCon> */}
                {/* <ImageGalleryCon className="flex aic jcc" > */}
                <ImageGallery className="w100 flex aife jcsb wrap bgr h100 flex">
                  {image.map((item, i) => (
                    <>
                      {i > 0 && (
                        <ImageGalleryImageCon
                          className="w100 flex aic jcc wrap bsbb"
                          style={{
                            maxWidth: "265px",
                            width: "50%",
                            minWidth: "auto",
                            paddingLeft: "3px",
                            paddingTop: "3px",
                          }}
                        >
                          <ImageGalleryImage
                            src={require("../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg")}
                          />
                        </ImageGalleryImageCon>
                      )}
                    </>
                  ))}
                  <ImageGalleryButtonCon className="flex aic jcc w100">
                    <ImageGalleryImageButton
                      className="flex aic jcc s"
                      // onClick={() => setShow(true)}
                    >
                      <Apps sx={{ fontSize: "16px", margin: "0 3px" }} /> Show
                      all photos
                    </ImageGalleryImageButton>
                  </ImageGalleryButtonCon>
                </ImageGallery>
              </ImageGalleryCon>

              <ProductInfoBottom>
                <ListingId>Listing ID: 14076242</ListingId>
                <HR />
                <ItemId>Item #: 7300-335686</ItemId>
              </ProductInfoBottom>
            </ProductInfo>
            <ProductPrice>
              <ProductPriceLeft>
                <ProductPriceLeftTxt fz="35px" mb="39px" mt="20px" fw={400}>
                  Current Price
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="15px" fz="19px" fw={300}>
                  Buyer's Premium
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="15px" fz="19px" fw={300}>
                  Bid Increment (US)
                </ProductPriceLeftTxt>
              </ProductPriceLeft>
              {/* <AuctionTimeHr/> */}
              <ProductPriceRight>
                {/* <ProductPriceRightTxtCon> */}
                <ProductPriceLeftTxt
                  cl="#43B055"
                  fw={600}
                  fz="35px"
                  mb="20px"
                  mt="20px"
                >
                  US $700.00
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="10px" fz="19px">
                  10.00%
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="10px" fz="19px">
                  $50.00
                </ProductPriceLeftTxt>
                {/* </ProductPriceRightTxtCon> */}
              </ProductPriceRight>
            </ProductPrice>
            <AuctionTimeHr mg="25px" wd="95%" />

            <ShowContactButtonCon>
              {showcontact ? (
                <ShowContactButton onClick={() => setshowcontact(false)}>
                  08129785638
                </ShowContactButton>
              ) : (
                <ShowContactButton
                  className="flex aic jcc"
                  onClick={() => setshowcontact(true)}
                >
                  {" "}
                  <WifiCalling3Outlined sx={{ marginRight: "5px" }} /> Show
                  contact
                </ShowContactButton>
              )}
            </ShowContactButtonCon>

            <AuctionTimeHr mg="25px" wd="100%" />
            <SocialIconCon className="flex aic jcc">
              <SocialIcon className="flex aic jcc" bg="#3b589b">
                <FacebookOutlined />
              </SocialIcon>
              <SocialIcon className="flex aic jcc" bg="#f03c3d">
                <Instagram />
              </SocialIcon>
              <SocialIcon className="flex aic jcc" bg="#6aabde">
                <Twitter />
              </SocialIcon>
              <SocialIcon className="flex aic jcc" bg="#7ac87b">
                <WhatsApp />
              </SocialIcon>
            </SocialIconCon>
            <AuctionTimeHr mg="25px" wd="100%" />

            <ShowContactButtonCon>
              <MakeAnOfferButton onClick={() => setmakeoffer(true)}>
                Make an offer
              </MakeAnOfferButton>
            </ShowContactButtonCon>
            {/* <MakeOfferCon className='flex aic jcc w100 bgr' > */}
            {makeoffer && <MakeOffer setmakeoffer={setmakeoffer} />}
            {/* </MakeOfferCon> */}

            {/* <SubmitBid>
            <SubmitBidImgCon>
              <SubmitBidImg src={searchIcon} alt="searchIcon" />
            </SubmitBidImgCon>
            <InputContainer>
              <Input placeholder="Enter Your Bid Amount" />
            </InputContainer>
            <SubmitBidButtonCon>
              <SubmitBidButton>Submit A Bid</SubmitBidButton>
            </SubmitBidButtonCon>
          </SubmitBid> */}
            {/* <BuyProductCon>
            <BuyNowBtnCon>
              <BuyBtn>BUY NOW: $4,200</BuyBtn>
            </BuyNowBtnCon>
          </BuyProductCon> */}
            {/* </ProductInfoLeftCon> */}
            {/* End Of ProductInfoLeftCon */}
          </ProductInfoCon>
        </ProductHomeSectionCon>
      {/* )} */}
    </Container>
  );
};

export default ProductHomeSection;
