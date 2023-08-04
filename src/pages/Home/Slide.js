import styled from "styled-components";
import {Card} from 'antd'
// import Footer from "../../Footer/Footer";
import { FadeInUp } from "../../utils/fade-in-up";
import { useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import Graph1 from "../../assets/images/home/box/1.svg";
import Graph2 from "../../assets/images/home/box/2.svg";
import Graph3 from "../../assets/images/home/box/3.svg";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Slider as SliderC } from "antd";
import './Slide.less';
import Sider from "antd/lib/layout/Sider";

const { Meta } = Card;


const Contrainer = styled("div")`
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  width: 100%;

`

const Wrapper = styled("div")`
  display: flex;
  height: 100%;
  min-height: 100vh;
  //border-radius: 30px 30px 0 0;
  position: relative;
  justify-content: space-between;
  overflow: hidden;
  max-width: 1200px;
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  gap: 20px;
  &>div{
    width: 60%;
    &:last-of-type{
      width: 40%;
      text-align: right;
    }
  }
  @media (max-width: 992px) {
    padding: 0 20px;
    flex-direction: column;
    height: max-content;
    align-items: flex-start;
    justify-content: space-around;
    &>div{
      width: 100%!important;
    }
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const InfoBlock = styled.div`
  margin: 0 auto;
  width: 100%;
  h1{
    font-size: 48px;
    color: #18181B;
    font-weight: 700;
    line-height: 1.1;
  }
  @media (max-width: 992px) {
    h1{
      font-size: 36px;
    }
  }
  p{
    font-size: 20px;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bolder!important;
  font-size: 36px!important;
  line-height: 1.1;
  color: ${(props) => props?.color && props?.color};
  margin-bottom: 30px;
  @media (max-width: 992px) {
    font-size: 28px!important;
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px!important;
  line-height: 1.1;
  color: ${(props) => props?.color && props?.color};
  margin-bottom: 40px;
  @media (max-width: 992px) {
    font-size: 28px!important;
    margin-bottom: 20px;
  }
`;

const SlideLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  border-radius: 8px;
  padding: 14px 20px;
  width: auto;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  background:  #5542F6;
  border: #5542F6;
  color: #fff;
  a{
    margin: 0;
  }
  &.coming{
   background: rgba(85, 66, 246, 0.5);
  }
  @media (max-width: 992px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const Description = styled.h3`
  margin: 0;
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 132%;
  color: ${(props) => props?.color && props?.color};
  opacity: 0.8;
  padding-bottom: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    padding-bottom: 0;
    font-size: 18px;
  }
`;

const Button = styled.button`
  border-radius: 20px;
  padding: 20px 30px;
  max-width: 344px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  text-align: center;

  margin-top: ${(props) => (props?.marginTop ? props?.marginTop : "0px")};
  background: ${(props) => (props?.background ? props?.background : "#F8D448")};
  border: ${(props) => (props?.border ? props?.border : "none")};
  color: ${(props) => (props?.color ? props?.color : "#000000")};

  @media (min-width: 360px) and (max-width: 992px) {
    max-width: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  object-fit: cover;
  padding: 24px;
  border: 24px;
  width: 420px;
  display: flex;
  align-items: center;
  @media (min-width: 360px) and (max-width: 992px) {
    padding: 0;

    width: 100%;
    height: auto;
    position: relative;
    top: 0;
  }
`;

const ImgContainerSvg = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  @media (min-width: 360px) and (max-width: 992px) {
    width: 100%;
    height: 100vh;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Link = styled.a`
  width: fit-content;
`;

export const PortfolioGraph = styled.div`
  width: 40vw;
  height: fit-content;
  background: #ffffff;
  // box-shadow: 0px 8px 48px -1px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  padding: 24px;
  width: 100%;
  @media (max-width: 767px) {
    width: 100%;
    padding: 16px;
    gap: 12px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    position: relative;
    top: 0;
    & > .item-1 {
      width: 100% !important;
    }
  }
  .item-1 {
    padding: 10px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    width: 174px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 992px) and (max-width: 2500px) {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      width: 100%;
      .headIn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 20px;
          height: 20px;
          background-size: contain;
          margin-right: 4px;
        }
        span {
          color: #18181b;
          font-family: "Graphik-bold";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
        }
      }
      .close {
      }
    }
    .body {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
    }
    .foot {
      width: 100%;
      .ant-slider-track {
        background: #5542f6;
      }
      .ant-slider-handle {
        border: solid 2px #5542f6;
      }
    }
  }
`;

const Slide = ({ slide }) => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
      <div className="section">
        <Wrapper
          mobileMinHeight={slide.mobileMinHeight}
          background={slide.backgroundFill}
          minHeight={slide.minHeight}
          ref={ref}
        >
          <Content>
            <InfoBlock>
              {slide.title === 'Everything in RAI Finance' && <h1>Everything in <br/>RAI Finance</h1>}
              {slide.title !== 'Everything in RAI Finance' && <Title color={slide.colorText}>{slide.title}</Title>}
              <p>{slide.description}</p>
             {slide.buttonTitle !== 'COMING SOON' && <SlideLink href={slide.href} target="_blank">
                {slide.buttonTitle}
              </SlideLink>
              }
              
             {slide.buttonTitle === 'COMING SOON' && <SlideLink className="coming" href="javascript:void(0)">
                {slide.buttonTitle}
              </SlideLink>
              }
              
            </InfoBlock>
          </Content>
          {slide.imgSvg ? (
            <ImgContainerSvg>{slide.imgSvg}</ImgContainerSvg>
            ) : slide.imgUrl ? (
              <ImgContainer mobileMinHeight={slide.mobileMinHeight}>
                <FadeInUp active={isVisible}>
                  <Img
                    src={slide.imgUrl}
                    width={slide.widthImg}
                    translate={slide.translate}
                    mobileWidth={slide.mobile.widthImg}
                    mobileMinHeight={slide.mobile.minHeight}
                    mobileTranslate={slide.mobile.translate}
                    desktopWidth={slide.desktopWidth}
                  />
                </FadeInUp>
              </ImgContainer>
          ) : slide.predictImgUrl ? (
            <FadeInUp active={isVisible}>
            <Card
              hoverable
              cover={<img alt="example" src={slide.predictImgUrl}></img>}
              className="predict-card"
            >
              <Meta title="BTC price as of May 9 will be $30000?"/>
              <div className='precent' style={{gridTemplateColumns: `50% 50%`}}>
                  <div className='yes'></div>
                  <div className='no'></div>
                  <div className='text'>
                      <div>YES $0.38</div>
                      <div>NO $0.59</div>
                  </div>
              </div>
              <span>Ended at 06:33 Jun 28 2022</span>
            </Card>
            </FadeInUp>
          ) : (
            <FadeInUp active={isVisible}>
              <PortfolioGraph>
                <div className="item-1">
                  <div className="head">
                    <div className="headIn">
                      <img src={Graph1} alt="" />
                      <span>CAPS</span>
                    </div>
                    <CloseOutlined />
                  </div>
                  <div className="body">
                    <Input defaultValue={"15%"} />
                  </div>
                  <div className="foot">
                    <SliderC defaultValue={30} />
                  </div>
                </div>
                <div className="item-1">
                  <div className="head">
                    <div className="headIn">
                      <img src={Graph2} alt="" />
                      <span>PEOPLE</span>
                    </div>
                    <CloseOutlined />
                  </div>
                  <div className="body">
                    <Input defaultValue={"15%"} />
                  </div>
                  <div className="foot">
                    <SliderC defaultValue={30} />
                  </div>
                </div>
                <div className="item-1">
                  <div className="head">
                    <div className="headIn">
                      <img src={Graph3} alt="" />
                      <span>CVX</span>
                    </div>
                    <CloseOutlined />
                  </div>
                  <div className="body">
                    <Input defaultValue={"15%"} />
                  </div>
                  <div className="foot">
                    <SliderC defaultValue={30} />
                  </div>
                </div>
              </PortfolioGraph>
            </FadeInUp>
          )}
        </Wrapper>
        {/* {slide.id === 7 && <Footer />} */}
      </div>
  );
};

export default Slide;
