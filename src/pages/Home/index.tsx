import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Anchor,
  Layout,
  Menu,
  Row,
  Col,
  Button,
  Card,
  Avatar,
  Carousel,
  Radio,
  Input,
  Slider as SliderC,
} from "antd";
import { CSSTransition } from "react-transition-group";
import { MenuOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Logo from "../../assets/images/logo-white.png"
// import Image1 from "../../assets/images/home/image1.jpg";
import Image1 from "../../assets/images/home/home1.png";
import homeImg2 from "../../assets/images/home/home2.png";
import homeImg3 from "../../assets/images/home/home3.png";
import homeImg4 from "../../assets/images/home/home4.png";
import homeImg5 from "../../assets/images/home/home5.png";
import Bithumb from "../../assets/images/home/Bithumb.png";
import HuoBiGlobal from "../../assets/images/home/HuoBiGlobal.png";
import PancakeSwap from "../../assets/images/home/PancakeSwap.png";
import ETH_Ploygon from "../../assets/images/home/eth_polygon.png";
import { ReactComponent as TwitterLogo } from "../../assets/images/home/svg/Twitter.svg";
import { ReactComponent as MediumLogo } from "../../assets/images/home/svg/Medium.svg";
import { ReactComponent as TelegramLogo } from "../../assets/images/home/svg/Telegram.svg";
import { ReactComponent as GithubLogo } from "../../assets/images/home/svg/Github.svg";
import { ReactComponent as KakaoLogo } from "../../assets/images/home/svg/Kakao.svg";
import { ReactComponent as WeiboLogo } from "../../assets/images/home/svg/Weibo.svg";
import { ReactComponent as EthereumLogo } from "../../assets/svg/ethereum.svg";
import { ReactComponent as PolygonLogo } from "../../assets/svg/polygon.svg";
import { ReactComponent as BaseLogo } from "../../assets/svg/base.svg";
import { ReactComponent as TaikoLogo } from "../../assets/svg/taiko.svg";
import "./index.less";
import DeepFirst from "../../assets/images/home/deepOne.svg";
import DeepSecond from "../../assets/images/home/deepSecond.svg";
import DeepThird from "../../assets/images/home/deepThird.svg";
import Sofipk from "../../assets/images/home/box/pk.png";
import Sofimexc from "../../assets/images/home/box/mexc.png";
import Sofihb from "../../assets/images/home/box/hb.png";
import Sofibt from "../../assets/images/home/box/bitumb.png";
import Sofibb from "../../assets/images/home/box/bibox.png";
import swapImg from "../../assets/images/home/box/swap.jpg";
import Slide from "./Slide";
import { useScroll } from "ahooks";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import '../../statics/fullpage.extensions.min.js'
// import '../../statics/fullpage.scrollOverflowReset.limited.min.js'

import anyBg from "../../assets/images/home_new/bg.jpg";
import coBg from "../../assets/images/home_new/bg_c1.png";
import LinkIcon from "../../assets/images/home_new/link.svg";
import userIcon from "../../assets/images/home_new/user.svg";
import coinIcon from "../../assets/images/home_new/coin.svg";
import boxIcon from "../../assets/images/home_new/box.png";
import boxIconHover from "../../assets/images/home_new/box_hover.png";
import checkIcon from "../../assets/images/home_new/check_icon.svg";
import boderIcon from "../../assets/images/home_new/boder_img.png";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  require('../../statics/fullpage.scrollOverflowReset.limited.min.js');
};
AOS.init();

const { Header, Sider, Content } = Layout;
const { Link } = Anchor;
const HeaderContent = styled.div`
  max-width: 1440px;
  padding: 0 50px;
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const FirstContent = styled.div`
  position: relative;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  background: url(${Image1}) no-repeat;
  background-size: contain;
  background-position: 600px 50px;
  @media (max-width: 1440px) {
    background-position: 300px 50px;
  }
  & > div {
    width: 1400px;
    margin: 0 auto;
    // padding: 150px 300px;
    padding: 145px 0 0 130px;
    @media (max-width: 992px) {
      &:before {
        display: none;
      }
    }
    @media (max-width: 1200px) {
      padding: 100px 50px;
    }
    @media (max-width: 767px) {
      padding: 100px 24px;
    }
    
    /* .ant-btn {
      display: block;
      margin: 0 auto;
    } */
  }
  h1 {
    display: inline-block;
    background: linear-gradient(84deg, #9E68DD 0%, #E594E5 45%, #6BDAB0 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 24px;
    font-family: Righteous;
    font-size: 72px;
    font-weight: 700;
    color: #111827;
    /* text-align: center; */
    line-height: 1.2;
    @media (max-width: 767px) {
      font-size: 46px;
    }
  }
  h3 {
    margin-top: 0;
    font-family: 'Poppins';
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    line-height: 1.3;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 1.3;
    }
  }
  p {
    font-family: 'Poppins';
    max-width: 820px;
    color: #DDD1E1;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 1.6;
    }
  }
  .launched {
    color: #ddd1e1;
    font-size: 12px;
    margin-top: 100px;
  }
  .eth_ploygon {
    height: 25px;
    margin: 0 auto;
    display: block;
    width: auto;
  }
`;
const HomeImg1 = styled.img`
  width: 600px;
  margin-left: -200px;
`

const DeepContent = styled.div`
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0px;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 20px;
  }
  h2 {
    font-family: "Graphik-bold";
    margin-bottom: 48px;
    color: #18181b;
    @media (max-width: 767px) {
      font-size: 32px;
    }
  }
  .boxes {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      flex-direction: column;
      width: 100%;
    }
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 336px;
      height: 174px;
      background: #ffffff;
      border-radius: 12px;
      margin-right: 24px;
      padding: 24px 0px;
      @media (max-width: 767px) {
        width: 100%;
        height: auto;
        margin-right: 0;
        margin-bottom: 10px;
      }
      img {
        margin-bottom: 12px;
        width: 64px;
        height: 64px;
      }
      .account {
        margin-bottom: 4px;
        font-family: "Graphik-bold";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #18181b;
      }
      .type {
        font-family: "Graphik";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #18181b;
      }
    }
  }
`;

const SofiContent = styled.div`
  width: 100%;
  background: #ffffff;
  margin: 0 auto;
  padding: 96px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  // max-width: 1200px;
  @media (max-width: 767px) {
    padding: 0 20px;
  }
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
    }
    & > div {
      font-family: "Graphik";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      text-align: center;
      color: #71717a;
      @media (max-width: 767px) {
        font-size: 14px;
      }
    }
    h2 {
      font-family: "Graphik-bold";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 64px;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 32px;
      }
    }
  }
  .swap {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 640px;
    @media (max-width: 767px) {
      align-items: flex-start;
      width: 100%;
    }
    h2 {
      font-family: "Graphik-bold";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }
    .box {
      img {
        width: 640px;
        height: auto;
        background-size: cover;
        @media (max-width: 767px) {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .gover {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 640px;
    @media (max-width: 767px) {
      width: 100%;
    }
    h2 {
      font-family: "Graphik-bold";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }
    .box {
      width: 100%;
      height: 132px;
      margin-bottom: 18px;
    }
  }
`;

const FifthContent = styled.div`
  background: #fff;
  & > div {
    margin: 0 auto;
    max-width: 1200px;
    padding: 100px 50px;
    @media (max-width: 767px) {
      padding: 100px 20px;
    }
  }
  .whitepaper {
    @media (max-width: 767px) {
      text-align: center;
    }
    .img {
      width: 100%;
      margin-top: 20px;
      @media (max-width: 767px) {
        width: 100%;
        height: auto;
      }
    }
  }
  .tokenDes {
    text-align: left;
    font-size: 14px;
    line-height: 24px;
    color: #79869f;
    display: block;
    width: 500px;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  h2 {
    font-weight: 700;
    font-size: 48px;
    color: #111827;
    font-family: "Graphik-bold";
    span {
      color: #5542f6;
    }
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }
  h3 {
    margin-top: 0;
    font-weight: 700;
    font-size: 16px;
    color: #111827;
  }
  p {
    color: #6b7280;
    font-size: 20px;
  }
`;
const SixthContent = styled.div`
  background: rgba(255, 255, 255, 0.6);
  & > div {
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px;
    @media (max-width: 1200px) {
      padding: 100px 50px;
    }
    @media (max-width: 767px) {
      padding: 20px;
    }
  }
  p {
    padding: 20px 100px;
    text-align: center;
    @media (max-width: 767px) {
      padding: 20px;
    }
  }
  .ant-card-body {
    margin: 0 auto;
    text-align: center;
  }
`;

const SeventhContent = styled.div`
  background: #fff;
  & > div {
    margin: 0 auto;
    max-width: 1200px;
    padding: 100px 50px;
    @media (max-width: 767px) {
      padding: 20px;
    }
    h2 {
      font-family: "Graphik-bold";
    }
  }
`;
const StyledLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  border-radius: 8px;
  svg {
    width: 32px;
    .cls-1 {
      fill: #fff;
    }
    .cls-2 {
      fill: #6b7280;
    }
    &:hover {
      .cls-1 {
        fill: #6b7280;
      }
      .cls-2 {
        fill: #3c17b8;
      }
    }
  }
`;

const Copyright = styled.div`
  font-size: 12px;
`;

export const GoverIssue = styled.div<{ width?: any; height?: any }>`
  width: ${({ width }) => width || "350px"};
  height: ${({ height }) => height || "132px"};
  padding: 20px 40px;
  margin: 0 auto;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(212, 99, 252, 0.22) 0%, rgba(41, 163, 156, 0.15) 100%);
  backdrop-filter: blur(27px);

  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: url(${boderIcon}) no-repeat;
    background-size: 100% 100%;
    z-index: -1;
  }
  
  .first {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    margin-bottom: 20px;
  }
  .c-line {
    width: 1px;
    background-color: #9A78A1;
    height: 18px;
    margin: 0 18px;
  }
  .link {
    color: #B2F6A6;
    cursor: pointer;
  }
  .second {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: Poppins;
  }
  .on {
    color: #DFBEEF;
    font-size: 18px;
    margin-bottom: 4px;
  }
  .off {
    font-weight: 600;
    font-size: 30px;
    line-height: 32px;
    color: #fff;
  }
  .third {
    text-align: right;
    margin-top: 20px;
  }
  .date {
    color: #DFBEEF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  .tag {
      position: absolute;
      top: 20px;
      right: 40px;
      border-radius: 6px;
      background: var(--green, #21C331);
      padding: 2px;
      > div {
        padding: 2px 17px;
        border-radius: 6px;
        border: 1px solid #000;
      }
      &.active {
        background: #21C331;
        color: #fff;
      }
      &.soon {
        background: #5542f6;
      }
      &.closed,
      &.canceled {
        background: #a1a1aa;
      }
    }

    @media (max-width: 767px) {
      padding: 10px;
      overflow: hidden;
      border-radius: 15px;
      .c-line {
        margin: 0 10px;
      }
      .tag {
        top: 10px;
        right: 10px;
      }
    }
`;

const BtnBox = styled.div`
  width: 350px;
  min-height: 200px;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  padding: 16px;
  margin: 24px auto;
  .radio {
    height: 48px;
    background: #ffffff;
    border: 2px solid #e4e4e7;
    border-radius: 8px;
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    .inner {
      display: flex;
      align-items: center;
      & > div {
        margin-right: 8px;
      }
    }
    .icon {
      width: 20px;
      height: 20px;
      background: #c4c4c4;
      opacity: 0.5;
    }
  }
  .color {
    border: 2px solid #5542f6;
  }
`;

export const PortfolioGraph = styled.div`
  width: 420px;
  height: 360px;
  background: #ffffff;
  box-shadow: 0px 8px 48px -1px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  padding: 24px;
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

const LeftContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  background: transparent;;
  z-index: 10;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    align-items: flex-start;
    top: 180px;
  }
`


const InfoBlock = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 50px;
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: ${(props) => props?.color && props?.color};
  max-width: 50%;
  padding-bottom: 40px;
  @media (max-width: 992px) {
    font-size: 28px;
    padding-bottom: 20px;
    max-width: 100%;
  }
`;

const SlideLink = styled.a`
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
  @media (max-width: 992px) {
    max-width: 100%;
    padding: 10px;
  }
`;
const MultipleButton = styled(Button)`
  display: flex;
  width: 200px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 30px;
  background: linear-gradient(169deg, #9A51E3 0%, #C961DE 45.83%, #29A39C 100%);
  box-shadow: 0px -3px 10px 0px rgba(0, 255, 240, 0.70) inset, 4px 5px 5px 0px rgba(255, 255, 255, 0.25) inset;
  &:hover {
    background: linear-gradient(169deg, #9A51E3 0%, #C961DE 45.83%, #29A39C 100%);
  }
  a {
    font-family: Righteous;
    color: #fff !important;
  }
`
const SildeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
const SildeBoxImg = styled.img`
  width: 660px;
  @media (max-width: 767px) {
    width: 100%;
    order: 2;
  }
`
const SildeBoxContent = styled.div`
  width: 630px;
  padding: 0 60px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 24px;
    order: 1;
    margin-bottom: 30px;
  }
`
const RightousTitle = styled.div`
  color: #FFF;
  font-family: Righteous;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 1.3;
  }
`
const PoppinsTxt = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  color: #DDD1E1;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 1.6;
  }
`
const ComingSoonButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  position: relative;
  box-sizing: border-box;
  color: #FFF;
  background: #000;
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 25px;
  font-family: 'Righteous';
  font-size: 14px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, #E477FF, #6BDAD0);
  }
`
const EverythingBox = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: url(${homeImg5}) no-repeat;
  background-size: 100%;
  background-position: center 35%;
  text-align: center;
  @media (max-width: 767px) {
    height: 400px;
    background-size: 240%;
    background-position: center 10%;
  }
`
const EverythingBoxTitle1 = styled.div`
  color: #FFF;
  font-family: 'Righteous';
  font-size: 42px;
  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 1.6;
  }
`
const EverythingBoxTitle2 = styled.div`
  display: inline-block;
  font-family: 'Righteous';
  font-size: 72px;
  background: linear-gradient(84deg, #9E68DD 0%, #E594E5 45.31%, #6BDAB0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    font-size: 46px;
    line-height: 1.6;
  }
`
const EverythingBoxFoot = styled.div`
  position: absolute;
  bottom: 200px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 767px) {
    bottom: 20px;
  }
`
const ColourfulText = styled.div`
  display: inline-block;
  font-family: Righteous;
  font-size: 72px;
  font-weight: 400;
  background: linear-gradient(84deg, #9E68DD 0%, #E594E5 45.31%, #6BDAB0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 767px) {
    font-size: 48px;
  }
`;
const ColButton = styled.a`
  display: inline-flex;
  width: 284px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(169deg, #9A51E3 0%, #C961DE 45.83%, #29A39C 100%);
  box-shadow: 0px -3px 10px 0px rgba(0, 255, 240, 0.70) inset, 4px 5px 5px 0px rgba(255, 255, 255, 0.25) inset;
  text-transform: uppercase;
  color: #FFF;
  font-family: Righteous;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
`;
const DiveContent = styled.div`
  margin: 44px auto 133px;
  display: flex;
  width: 1160px;
  justify-content: space-between;
  align-items: center;
  
  .dive_item {
    font-family: Poppins;
    background: url(${boxIcon}) no-repeat;
    background-size: 100% 100%;
    width: 360px;
    height: 312px;
    text-align: center;
    color: #fff;
    &:hover {
      background-image: url(${boxIconHover});
    }
    > img {
      margin: 35px 0 5px;
    }
    .dive_account {
      font-size: 30px;
      font-weight: 600; 
    }
    .dive_type {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 20px;
    .dive_item {
      margin-bottom: 10px;
    }
  }
`;
const MyCheckBox = styled.a`
  display: block;
  margin: 10px 0;
  position: relative;
  height: 100px;
  border-radius: 10px;
  background: linear-gradient(122deg, rgba(212, 99, 252, 0.22) 0%, rgba(41, 163, 156, 0.15) 100%);
  padding: 30px 50px;
  z-index: 2;
  top: 0px;
  left: 0px;

  img {
    display: none;
  }
  ${ColourfulText} {
    display: none;
    font-size: 30px;
    text-shadow: 0px 3px 20px rgba(240, 147, 255, 0.55);
  }

  &:hover {
    top: -10px;
    left: -40px;
    transition: top 400ms, left 400ms;
    background: linear-gradient(122deg, rgba(212, 99, 252, 0.22) 0%, rgba(41, 163, 156, 0.15) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(185, 51, 207, 0.18) 51.58%, rgba(0, 0, 0, 0.00) 100%);
    backdrop-filter: blur(12px);
    img {
      display: block;
    }
    .text {
      color: #fff;
    }
    ${ColourfulText} {
      display: block;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: url(${boderIcon}) no-repeat;
    background-size: 100% 100%;
    z-index: -1;
  }
  .inner_left {
    display: flex;
    align-items: center;
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    
    .icon {
      width: 32px;
      height: 32px;
      background-color: rgba(37, 27, 50, 0.50);
      border: 1px solid #5D3F84;
      border-radius: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 25px;
    }
  }
  .text {
    color: #E0B6EB;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }

  @media (max-width: 767px) {
    &:hover {
      top: 0;
      left: 0;
    }
  }
`;

export const proposalStatus = (state: number) => {
  const STATUS: any = {
    0: <span>review</span>,
    1: <span>active</span>,
    2: <span>canceled</span>,
    3: <span>failed</span>,
    4: <span>passed</span>,
    5: <span>passed</span>,
    6: <span>failed</span>,
    7: <span>passed</span>,
    8: <span>passed</span>,
  };
  return STATUS[state];
};

export const proposalStateColor: { [state: number]: string } = {
  0: "#9A9A9A",
  1: "#018526",
  2: "#9A9A9A",
  3: "#9A9A9A",
  4: "#018526",
  5: "#018526",
  6: "#9A9A9A",
  7: "#018526",
  8: "#018526",
};

export const formatDollarAmount = (num: any, digits: any) => {
  const formatter = new Intl.NumberFormat([], {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  return formatter.format(num);
};

const slideArray = [
  {
    href: "https://app.rai.finance/#/sts",
    title: "Step into the World of Social Trading",
    description: <>Access intelligent management tools and endless opportunities In the age of Social + DeFi = SocialFi. Easily create a portfolio with multiple tokens and explore other people's portfolios. Onboarding in a trending theme is easier than ever before.</>,
    buttonTitle: "GO TO APP",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "./Screenshots/side2.png",
    id: 4,
    translate: `20px, -12px`,
    minHeight: "100vh",
    mobileMinHeight: "70vh",
    widthImg: "57vw",
    mobile: {
      translate: `0px, 10px`,
      widthImg: "100%",
      minHeight: "43vh",
    },
    desktopWidth: "68vw",
  },
  {
    href: "/",
    title: "DEX, redefined",
    description: "Incorporated with the innovative Discretized-Liquidity-AMM model, RAI Finance’s Swap on multi-chains to maximize capital efficiency by realizing Limit Order / Pro mode / Analytics in a decentralized way.",
    buttonTitle: "COMING SOON",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "./Screenshots/side3.png",
    id: 4,
    translate: `20px, -12px`,
    minHeight: "100vh",
    mobileMinHeight: "70vh",
    widthImg: "57vw",
    mobile: {
      translate: `0px, 10px`,
      widthImg: "100%",
      minHeight: "43vh",
    },
    desktopWidth: "68vw",
  },
  {
    href: "/",
    title: <>Trade your NFT faster <br />and worthy</>,
    description: "NFT swap's proprietary AI-based appraisal model enables NFT pricing outputs with much higher precision, allowing users to unlock further value from NFT assets",
    buttonTitle: "COMING SOON",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "./Screenshots/side4.png",
    id: 4,
    translate: `20px, -12px`,
    minHeight: "100vh",
    mobileMinHeight: "70vh",
    widthImg: "57vw",
    mobile: {
      translate: `0px, 10px`,
      widthImg: "100%",
      minHeight: "43vh",
    },
    desktopWidth: "68vw",
  },
  {
    href: "https://app.rai.finance/#/sts",
    title: "Everything in RAI Finance",
    description: "",
    buttonTitle: "GO TO APP",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "./Screenshots/rai.png",
    id: 4,
    translate: `20px, -12px`,
    minHeight: "100vh",
    mobileMinHeight: "70vh",
    widthImg: "57vw",
    mobile: {
      translate: `0px, 10px`,
      widthImg: "100%",
      minHeight: "43vh",
    },
    desktopWidth: "68vw",
  },
];

const Home: React.FC = () => {
  const GoverIssueBox: React.FC<any> = (props) => {
    const {
      No,
      date,
      voteCounts,
      state,
      contract,
      proposalId,
      width,
      height,
      subTitle,
      Title,
      style
    } = props;
    return (
      <GoverIssue style={{...style}} width={width} height={height}>
        <div className="first">
          <div>SOFIP-{No}</div>
          <div className="c-line"></div>
          <div className="link">on-chain</div>
        </div>
        <div className="second">
          <div className="on">{subTitle || "Edit Portfolio List"}</div>
          <div className="off">{Title}</div>
        </div>
        <div className="third">
          <div className="date">Ended at {date}</div>
        </div>
        <div
            className={`tag ${
              state === 0
                ? "soon"
                : state === 1 ||
                  state === 4 ||
                  state === 5 ||
                  state === 7 ||
                  state === 8
                ? "active"
                : "closed"
              }`}
            color={proposalStateColor[state]}
          >
            <div style={{textTransform: 'uppercase'}}>
              {proposalStatus(state)}
            </div>
          </div>
        {/* <div className='result'>
                        <div className={`tag ${state === 0 ? 'soon' : (state === 1 || state === 4 || state === 5 || state === 7 || state === 8) ? 'active' : 'closed'}`} color={proposalStateColor[state]}>
                        {proposalStatus(state)}
                        </div>
                    <div className='count'>{ 31 } Voted</div>
                </div>
                <div className='date'>Ended at { date }</div> */}
      </GoverIssue>
    );
  };
  const getCustomPaging = (i: number) => {
    switch (i) {
      case 1:
        return (
          <>
            <h2>STS</h2>
            <p>
              Social Trading System combines both digital asset trading and
              socializing
            </p>
          </>
        );
      case 2:
        return (
          <>
            <h2>Aggregator</h2>
            <p>The fastest way to trade your multi-chain assets</p>
          </>
        );
      case 3:
        return (
          <>
            <h2>Governance</h2>
            <p>
              Decentralized governance to participate in the protocol upgrade
            </p>
          </>
        );
      case 4:
        return (
          <>
            <h2>My Wallet</h2>
            <p>Check your asset status and rebalance your portfolio</p>
          </>
        );
    }
  };
  const settings = {
    customPaging: function (i: number) {
      return <a>{getCustomPaging(i + 1)}</a>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(128);
  const [showLeftContent, setShowLeftContent] = useState<boolean>(false);
  const [scrollNum, setScrollNum] = useState<number>(0);
  const [blockScroll, setBlockScroll] = useState<boolean>(false)
  const carouselRef = useRef<any>();
  const productRef = useRef<any>();
  let y = 0;
  const { current } = useRef<any>({
    isScroll: true,
    timer: null,
    delay: 100,
  });
  let slideNum = 0;
  const scroll = useScroll(productRef);

  const contryList = [
    'DZ',
    'BD',
    'BO',
    'BY',
    'BI',
    'MM',
    'CI',
    'CU',
    'CD',
    'EC',
    'IR',
    'IQ',
    'LR',
    'LY',
    'ML',
    'MA',
    'NP',
    'KP',
    'SO',
    'SD',
    'SY',
    'VE',
    'YE',
    'ZW',
    'CA',
    'PA',
    'US',
    'GB',
  ]

  const scrollHeader = () => {
    if (!document.querySelector(".ant-layout-header")) {
      return;
    }

    var scrollTop = document.documentElement.scrollTop;
    console.log('scrolltop:', scrollTop)
    let height = 128;
    if (scrollTop < 0) {
      height = 128;
    } else if (scrollTop < 256) {
      height = 128 - 0.21875 * scrollTop;
    } else {
      height = 72;
    }
    setScrollHeight(height);
  };

  const scrollTo = (element: string) => {
    const doc: any = document.getElementById(`${element}`);
    if (doc) {
      doc.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    scrollHeader();
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    let m: any = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d: any = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h: any = date.getHours();
    h = h < 10 ? "0" + h : h.toString();
    let mins: any = date.getMinutes();
    mins = mins < 10 ? "0" + mins : mins.toString();
    let sec: any = date.getSeconds();
    sec = sec < 10 ? "0" + sec : sec.toString();
    return y + "-" + m + "-" + d + " " + h + ":" + mins + ":" + sec;
  };

  const handlePageChange = (num: any) => {
    const timeout = setTimeout(() => {
      setBlockScroll(false)
      clearTimeout(timeout)
    }, 1500)
    if (num >= 1 && num <= 7) {
      setShowLeftContent(true);
    } else {
      setShowLeftContent(false);
    }
    setScrollNum(num)
  };


  return (
    <Layout className="homePage">
      {/* <HeaderNotification>
                <a href="https://medium.com/rai-finance/rai-finance-launches-global-mainnet-event-ac789ea8756d" target="_blank">Try RAI Finance main net product and win $50000 USD reward!</a>
            </HeaderNotification> */}
      <Header>
        <HeaderContent
          className="header"
          style={{ height: `100px` }}
        >
          <img className="Logo" src={Logo} alt="logo" />
          <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames="NavAnimation"
            unmountOnExit
          >
            <nav className="Nav">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("Product");
                }}
              >
                Product
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="/RAI-Finance-WhitePaper.pdf"
              >
                Whitepaper
              </a>
              <a
                target="_blank"
                href="https://rai-finance.notion.site/62225248bc054e1eb7ff14f8def9b17e?v=3ea69551a4a943169d4d04a8bcc8f838"
                rel="noreferrer"
              >
                Roadmap
              </a>
              <a
                target="_blank"
                href="https://rai-finance.gitbook.io/rai-finance/"
                rel="noreferrer"
              >
                Wiki
              </a>
              <a
                target="_blank"
                href="https://www.certik.com/projects/rai-finance"
                rel="noreferrer"
              >
                Audit
              </a>
              <Button type="primary">
                <a
                  target="_blank"
                  href="https://app.rai.finance"
                  rel="noreferrer"
                >
                  Launch App
                </a>
              </Button>
            </nav>
          </CSSTransition>
          <button onClick={toggleNav} className="Burger">
            <MenuOutlined />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        {/* <ReactPageScroller
        pageOnChange={handlePageChange}
        blockScrollUp={blockScroll}
        blockScrollDown={blockScroll}
        onBeforePageScroll={() => setBlockScroll(true)}
       > */}
        <main>
          <section style={{ height: 'auto' }}>
            <FirstContent id="Join">
              <div>
                <h1>For Everything Trading</h1>
                <h3>Multiple DEXs for tokens, NFTs and Social Trading</h3>
                <p style={{marginBottom:'50px'}}>
                  RAI Finance is the hub for everything trading. Since 2020, our team has developed various DeFi, NFTFi, and Social Trading products that operate across multiple blockchain networks. RAI Finance boasts several customizable DEXs for both tokens and NFTs, in addition to Social Trading functionality. Whether you need a straightforward swap, NFT trading services, or index trading, Rai Finance offers a solution for everything trading.
                </p>
                <MultipleButton>
                  <a
                    href="https://app.rai.finance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ENTER MAINNET
                  </a>
                </MultipleButton>
                <p className="launched">
                  RAI Finance product is officially launched on
                </p>
                <div className="networks">
                  <div>
                    <EthereumLogo />
                    <div>Ethereum</div>
                  </div>
                  <div>
                    <PolygonLogo />
                    <div>Polygon</div>
                  </div>
                  <div>
                    <BaseLogo />
                    <div>BASE</div>
                  </div>
                  <div>
                    <TaikoLogo />
                    <div>Taiko</div>
                  </div>
                </div>
              </div>
              {/* <HomeImg1 src={Image1}></HomeImg1> */}
            </FirstContent>
          </section>
          {/* {slideArray.map((slide: any) => {
          return <section><Slide key={slide.id} slide={slide} /></section>;
        })} */}
          <section>
            <SildeBox data-aos="fade-up" data-aos-duration="1500">
              <SildeBoxImg src={homeImg2}></SildeBoxImg>
              <SildeBoxContent>
                <RightousTitle>Step into the World of Social Trading</RightousTitle>
                <PoppinsTxt>Access intelligent management tools and endless opportunities In the age of Social + DeFi = SocialFi. Easily create a portfolio with multiple tokens and explore other people's portfolios. Onboarding in a trending theme is easier than ever before.</PoppinsTxt>
                <MultipleButton>
                  <a
                    href="https://app.rai.finance/#/sts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GO TO APP
                  </a>
                </MultipleButton>
              </SildeBoxContent>
            </SildeBox>
          </section>
          <section>
            <SildeBox data-aos="fade-up" data-aos-duration="1500">
              <SildeBoxContent>
                <RightousTitle>DEX, redefined</RightousTitle>
                <PoppinsTxt>Incorporated with the innovative Discretized-Liquidity-AMM model, RAI Finance’s Swap on multi-chains to maximize capital efficiency by realizing Limit Order / Pro mode / Analytics in a decentralized way.</PoppinsTxt>
                <ComingSoonButton>
                  <span>COMING SOON</span>
                </ComingSoonButton>
              </SildeBoxContent>
              <SildeBoxImg src={homeImg3}></SildeBoxImg>
            </SildeBox>
          </section>
          <section>
            <SildeBox data-aos="fade-up" data-aos-duration="1500">
              <SildeBoxImg src={homeImg4}></SildeBoxImg>
              <SildeBoxContent>
                <RightousTitle>Trade your NFT faster and worthy</RightousTitle>
                <PoppinsTxt>NFT swap's proprietary AI-based appraisal model enables NFT pricing outputs with much higher precision, allowing users to unlock further value from NFT assets</PoppinsTxt>
                <ComingSoonButton>
                  <span>COMING SOON</span>
                </ComingSoonButton>
              </SildeBoxContent>
            </SildeBox>
          </section>
          <section>
            <EverythingBox data-aos="fade-up" data-aos-duration="1500">
              <EverythingBoxTitle1>Everything in</EverythingBoxTitle1>
              <EverythingBoxTitle2>RAI Finance</EverythingBoxTitle2>
              <EverythingBoxFoot>
                <MultipleButton>
                  <a
                    href="https://app.rai.finance/#/sts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GO TO APP
                  </a>
                </MultipleButton>
              </EverythingBoxFoot>
            </EverythingBox>
          </section>
        <section className="any_box">
          <div className="inner_box">
            <div>
              <ColourfulText>Anything else?</ColourfulText>
              <div className="any_content">Share Investment Set, Communicate with KOL, Analyze investment data and Invest with professionals</div>
            </div>
            <div className="gover">
              <div
                data-aos="fade-up" data-aos-duration="1500"
                className="item_box"
                onClick={() => {
                  window.open("https://app.rai.finance/#/proposals/0xFFBd847806Cc462b1Df726C5363E8D40f52afa8f/49");
                }}
              >
                <GoverIssueBox
                  No="038"
                  Title="Revise the UI & UX of RAI Finance app"
                  subTitle="Marketing Campaign"
                  height={"100%"}
                  width={"100%"}
                  className="issue"
                  voteCounts={31}
                  date={formatDate(new Date(1681272081000))}
                  state={4}
                />
              </div>
              <div
                 data-aos="fade-up" data-aos-duration="1500"
                className="item_box"
                style={{ margin: '28px auto 52px'}}
                onClick={() => {
                  window.open("https://app.rai.finance/#/proposals/0xFFBd847806Cc462b1Df726C5363E8D40f52afa8f/43");
                }}
              >
                <GoverIssueBox
                  No="032"
                  Title="Add $LDO to Portfolio List"
                  subTitle="Edit Portfolio List"
                  height={"100%"}
                  width={"100%"}
                  voteCounts={31}
                  date={formatDate(new Date(1679815844000))}
                  state={4}
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" style={{textAlign: 'center'}}>
              <ColButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.rai.finance/#/proposals"
                className="elementor-item"
              >
                GO TO Governance
              </ColButton>
            </div>
          </div>
          <img className="b_img" src={coBg} />
        </section>
        <div style={{ background: '#000'}}>
            <div className="dive_box">
              <ColourfulText>Deep Dive in RAI.finance</ColourfulText>
              <DiveContent data-aos="fade-up" data-aos-duration="1500">
                <div className="dive_item">
                  <img src={userIcon} />
                  <div className="dive_account">9,870</div>
                  <div className="dive_type">Users</div>
                </div>
                <div className="dive_item">
                  <img src={coinIcon} />
                  <div className="dive_account">44,434</div>
                  <div className="dive_type">Transaction</div>
                </div>
                <div className="dive_item">
                  <img src={LinkIcon} />
                  <div className="dive_account">111</div>
                  <div className="dive_type">Tokens supported in Social Trading</div>
                </div>
              </DiveContent>
            </div>
            <div className="finance_box">
              <div className="finance_box_left">
                <div className="finance_ex">Explore the SOFI at</div>
                <ColourfulText>Rai Finance</ColourfulText>
                <p>
                  SOFI, the native token for RAI Finance is an essential
                  component of the protocol and employs many functions in the
                  ecosystem.
                </p>
                <ColButton
                  target="_blank"
                  rel="noopener"
                  href="/RAI-Finance-WhitePaper.pdf"
                  className="elementor-item"
                >
                  View the White Paper
                </ColButton>
              </div>
              <div className="finance_box_right">
                <div data-aos="fade-up" data-aos-duration="1500">
                  <GoverIssueBox
                    height={"100%"}
                    width={"100%"}
                    style={{margin: 0}}
                    No="038"
                    Title="Revise the UI & UX of RAI Finance app"
                    voteCounts={31}
                    date={formatDate(new Date(1679815844000))}
                    state={4}
                  />
                  <MyCheckBox
                    target="_blank"
                    rel="noopener"
                    href="https://app.rai.finance/#/proposals/0xFFBd847806Cc462b1Df726C5363E8D40f52afa8f/49"
                  >
                    <div className="inner">
                      <div className="inner_left">
                        <div className="icon">
                          <img src={checkIcon} />
                        </div>
                        <div className="text">Approve</div>
                      </div>
                      <ColourfulText>Vote Now!</ColourfulText>
                    </div>
                  </MyCheckBox>
                  <MyCheckBox
                    target="_blank"
                    rel="noopener"
                    href="https://app.rai.finance/#/proposals/0xFFBd847806Cc462b1Df726C5363E8D40f52afa8f/49"
                  >
                    <div className="inner">
                      <div className="inner_left">
                        <div className="icon">
                          <img src={checkIcon} />
                        </div>
                        <div className="text">Disapprove</div>
                      </div>
                      <ColourfulText>Vote Now!</ColourfulText>
                    </div>
                  </MyCheckBox>
                  {/* <Button
                    style={{ width: "100%", fontFamily: "Graphik-bold" }}
                    type="primary"
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://app.rai.finance/#/proposals"
                      className="elementor-item"
                    >
                      Vote Now
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="content">
                <div>
                  <Copyright>
                    <img className="footer_logo" src={Logo} alt="logo" />
                    <span style={{color: "#655C68", fontSize: 12, verticalAlign: 'bottom'}}>Copyrights © 2022 RAI.Finance All rights reserved.</span>
                  </Copyright>
                </div>
                <div>
                  <StyledLink
                    target="_blank"
                    href="https://github.com/RaiFinance"
                  >
                    <GithubLogo fill="#fff" />
                  </StyledLink>
                  <StyledLink
                    target="_blank"
                    href="https://open.kakao.com/o/gLPmITEc"
                  >
                    <KakaoLogo fill="#fff" />
                  </StyledLink>
                  <StyledLink
                    target="_blank"
                    href="https://medium.com/rai-finance"
                  >
                    <MediumLogo fill="#fff" />
                  </StyledLink>
                  <StyledLink target="_blank" href="https://t.me/RaiFinance">
                    <TelegramLogo fill="#fff" />
                  </StyledLink>
                  <StyledLink
                    target="_blank"
                    href="https://twitter.com/RaiFinance"
                  >
                    <TwitterLogo fill="#fff" />
                  </StyledLink>
                  <StyledLink
                    target="_blank"
                    href="https://weibo.com/u/7583482257"
                  >
                    <WeiboLogo fill="#fff" />
                  </StyledLink>
                </div>
              </div>
            </div>
          </div>
      {/* </ReactPageScroller> */}
      </main>
      </Content>
    </Layout>
  );
};

export default Home;
