import styled from "styled-components";

// import ListFeature from "../../shared/ListFeature/ListFeature";
import { WithScrollFreezing } from "./withScrollFreezingProps";
// import Footer from "../../Footer/Footer";
import { FadeInUp } from "../../utils/fade-in-up";
import { useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import Graph1 from "../../assets/images/home/box/1.svg";
import Graph2 from "../../assets/images/home/box/2.svg";
import Graph3 from "../../assets/images/home/box/3.svg";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Slider as SliderC } from "antd";

const Wrapper = styled("div")`
  display: flex;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  height: ${(props) => props?.minHeight && props?.minHeight};
  background: ${(props) => props?.background && props?.background};
  //border-radius: 30px 30px 0 0;
  position: relative;
  justify-content: space-between;
  overflow: hidden;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    height: max-content;
  }
`;

const Content = styled.div`
  padding-left: 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  @media (min-width: 360px) and (max-width: 992px) {
    width: 100%;
    padding: 200px 16px 0 16px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  top: -150px;
  @media (min-width: 360px) and (max-width: 992px) {
    position: relative;
    top: -90px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px !important;
  line-height: 120%;
  color: ${(props) => props?.color && props?.color};
  padding-bottom: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
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
  padding-top: 220px;
  width: 50%;
  height: 100%;
  position: relative;
  object-fit: cover;

  @media (min-width: 360px) and (max-width: 992px) {
    width: 100%;
    padding-top: 72px;
    height: ${(props) => props?.mobileMinHeight && props?.mobileMinHeight};
    position: relative;
    top: -50px;
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
  position: absolute;
  transform: translate(${(props) => props?.translate && props?.translate});
  width: 514px;
  object-fit: contain;

  @media (min-width: 300px) and (max-width: 1020px) {
    width: 100vw;
    transform: translate(0px, 12px);
  }

  @media (min-width: 1400px) and (max-width: 2500px) {
    width: 36vw;
    object-fit: contain;
  }
`;

const Link = styled.a`
  width: fit-content;
`;

export const PortfolioGraph = styled.div`
  width: 40vw;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 8px 48px -1px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  padding: 24px;
  margin: 280px 40px 0 0;
  @media (min-width: 992px) and (max-width: 2500px) {
    width: 36vw;
    margin-right: 120px;
  }
  @media (max-width: 767px) {
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    position: relative;
    top: -55px;
    & > .item-1 {
      width: 100% !important;
    }
  }
  .item-1 {
    padding: 16px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    width: 174px;
    height: 144px;
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
    <>
      <WithScrollFreezing>
        <Wrapper
          mobileMinHeight={slide.mobileMinHeight}
          background={slide.backgroundFill}
          minHeight={slide.minHeight}
          ref={ref}
        >
          <Content>
            <InfoBlock>
              <Title color={slide.colorText}>{slide.title}</Title>
              <Description color={slide.colorText}>
                {slide.description}
              </Description>
              {/* {slide.list && <ListFeature listFeature={slide.list} fill={slide.fill} />} */}
              <Link href={slide.href}>
                <Button
                  border={"#5542F6"}
                  background={"#5542F6"}
                  marginTop={slide.marginTopButton}
                  color={"#fff"}
                >
                  {slide.buttonTitle}
                </Button>
              </Link>
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
      </WithScrollFreezing>
    </>
  );
};

export default Slide;
