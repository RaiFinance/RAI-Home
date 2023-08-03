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
import axios from "axios";
import Logo from "../../assets/images/logo-dark.png";
import Image1 from "../../assets/images/home/image1.jpg";
import Bithumb from "../../assets/images/home/Bithumb.png";
import HuoBiGlobal from "../../assets/images/home/HuoBiGlobal.png";
import Dodo from "../../assets/images/home/Dodo.png";
import PancakeSwap from "../../assets/images/home/PancakeSwap.png";
import Alphabit from "../../assets/images/home/Alphabit.png";
import NGC from "../../assets/images/home/NGC.png";
import TheLeagueofTraders from "../../assets/images/home/TheLeagueofTraders.png";
import Avalanche from "../../assets/images/home/AVALANCHE.png";
import Chainlink from "../../assets/images/home/Chainlink.png";
import Cobak from "../../assets/images/home/cobak.png";
import Litentry from "../../assets/images/home/Litentry.png";
import Launchpsl from "../../assets/images/home/Launchpsl.png";
import Thegraph from "../../assets/images/home/thegraph.png";
import KPA from "../../assets/images/home/KPA.png";
import Bounce from "../../assets/images/home/Bounce.png";
import Tidal from "../../assets/images/home/TIDAL.png";
import Darwinia from "../../assets/images/home/DARWINIA.png";
import ETH_Ploygon from "../../assets/images/home/eth_polygon.png";
import { ReactComponent as TwitterLogo } from "../../assets/images/home/svg/Twitter.svg";
import { ReactComponent as MediumLogo } from "../../assets/images/home/svg/Medium.svg";
import { ReactComponent as TelegramLogo } from "../../assets/images/home/svg/Telegram.svg";
import { ReactComponent as GithubLogo } from "../../assets/images/home/svg/Github.svg";
import { ReactComponent as KakaoLogo } from "../../assets/images/home/svg/Kakao.svg";
import { ReactComponent as WeiboLogo } from "../../assets/images/home/svg/Weibo.svg";
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
import Bitcoins from "../../assets/images/home/bitcoins.png";
import { WithScrollFreezing } from "./withScrollFreezingProps";
import MainBlock from "./MainBlock";
import Slide from "./Slide";
import { useScroll } from "ahooks";
// import '../../statics/fullpage.extensions.min.js'
// import '../../statics/fullpage.scrollOverflowReset.limited.min.js'

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  require('../../statics/fullpage.scrollOverflowReset.limited.min.js');
};

const { Header, Sider, Content } = Layout;
const { Link } = Anchor;
const HeaderContent = styled.div`
  max-width: 1200px;
  padding: 0 50px;
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const FirstContent = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url(${Image1}) no-repeat;
  background-size: cover;
  & > div {
    max-width: 1200px;
    margin: 0 auto;
    // padding: 150px 300px;
    padding: 135px;
    @media (max-width: 992px) {
      &:before {
        display: none;
      }
    }
    @media (max-width: 1200px) {
      padding: 100px 50px;
    }
    @media (max-width: 767px) {
      padding: 100px 20px;
    }
    .ant-btn {
      display: block;
      margin: 0 auto;
    }
  }
  h1 {
    margin-bottom: 24px;
    font-size: 64px;
    font-weight: 700;
    color: #111827;
    text-align: center;
    line-height: 1.2;
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }
  p {
    font-family: "Graphik";
    color: #71717a;
    font-weight: 400;
    text-align: center;
    font-style: normal;
    font-size: 20px;
    padding: 0px 10px;
    line-height: 32px;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  .launched {
    color: #6b7280;
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
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  padding: 16px;
  margin: 0 auto;
  .first {
    width: 100%;
    height: 16px;
    line-height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #71717a;
    margin-bottom: 12px;
    .link {
      color: #5542f6;
      cursor: pointer;
    }
  }
  .second {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 32px;
    margin-bottom: 20px;
    .on {
      color: #71717a;
      font-size: 12px;
      margin-bottom: 4px;
    }
    .off {
      font-family: "Graphik";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #18181b;
      margin-bottom: 20px;
    }
  }
  .third {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tag {
      padding: 0px 4px;
      margin-right: 10px;
      font-weight: 600;
      font-size: 12px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 4px;
      color: #fff;
      &.active {
        background: #14b8a6;
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
    .date {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #71717a;
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
    href: "https://app.rai.finance/#/sts/create",
    title: <>Your Portfolio, Your Way: <br/>Create Your Own Portfolio</>,
    description: <><p>Take control of your investments, unleash your trading potential: </p>The Web3 Social Trading Platform for personalized portfolios</>,
    buttonTitle: "Pick Your Token",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "",
    id: 2,
    translate: `20px, -12px`,
    minHeight: "100vh",
    mobileMinHeight: "60vh",
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
    title: "Step into the World of Social Trading",
    description: <><p>Access intelligent management tools and endless opportunities</p> In the new age of Social + DeFi - SocialFi</>,
    buttonTitle: "Just for you",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "./Screenshots/line.png",
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
    description: "Incorporated with the innovative Discretized-Liquidity-AMM model, Rai Finance’s Swap on multi-chains to maximize capital efficiency by realizing Limit Order / Pro mode / Analytics in a decentralized way.",
    buttonTitle: "COMING SOON",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "./Screenshots/dex.png",
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
    title: "Trade your NFT faster and worthy",
    description: "NFT swap's proprietary AI-based appraisal model enables NFT pricing outputs with much higher precision, allowing users to unlock further value from NFT assets",
    buttonTitle: "COMING SOON",
    backgroundFill: "#fff",
    colorText: "#000000D9",
    fill: "white",
    list: [],
    imgUrl: "./Screenshots/nft.png",
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
    } = props;
    return (
      <GoverIssue width={width} height={height}>
        <div className="first">
          <div>SOFIP-{No}</div>
          <div className="link">on-chain</div>
        </div>
        <div className="second">
          <div className="on">{subTitle || "Edit Portfolio List"}</div>
          <div className="off">{Title}</div>
        </div>
        <div className="third">
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
            {proposalStatus(state)}
          </div>
          <div className="date">Ended at {date}</div>
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
    }, 1000)
    if(num >= 1 && num <= 7){
      setShowLeftContent(true);
    }else{
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
          style={{ height: `64px` }}
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
      <section style={{height: 'auto'}}>
        <FirstContent id="Join">
          <div>
            <h1>Join the new era of SocialFi</h1>
            <p>
              RAI Finance is a decentralized finance and social platform,
              powered by blockchain technology and governed by a community DAO.
              Its main features include Predict, Social trading, Social hub, and
              Aggregator, making it the center hub of DeFi and Social in the
              Web3 world. With its launch in 2020, RAI Finance is now available
              on multiple blockchain networks, providing innovation and
              accessibility to its users.
            </p>
            <Button type="primary">
              <a
                href="https://app.rai.finance"
                target="_blank"
                rel="noreferrer"
              >
                ENTER MAINNET
              </a>
            </Button>
            <p className="launched">
              RAI Finance product is officially launched on
            </p>
            <img className="eth_ploygon" src={ETH_Ploygon} alt="" />
          </div>
        </FirstContent>
        </section>
        {slideArray.map((slide: any) => {
          return <section><Slide key={slide.id} slide={slide} /></section>;
        })}
        <section style={{height: 'auto'}}>
          <SofiContent id="Sofi">
            <div className="head">
              <h2>Anything else?</h2>
              <div>
              Share Investment Set, Communicate with KOL, Analyze investment data and Invest with professionals
              </div>
            </div>
            <div className="swap">
              <h2></h2>
              <div className="box">
                {/* <img src={ SwapSvg } alt="" /> */}
                <img src={swapImg} alt="" />
              </div>
            </div>
            <div className="gover">
              <h2>Governance</h2>
              <div
                className="box"
                onClick={() => {
                  window.open("https://app.rai.finance/#/proposals");
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
                className="box"
                onClick={() => {
                  window.open("https://app.rai.finance/#/proposals");
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
            <Button
              type="primary"
              style={{ fontFamily: "Graphik-bold", width: "320px" }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.rai.finance/#/"
                className="elementor-item"
              >
                Go To App
              </a>
            </Button>
          </SofiContent>
        </section>
        <section style={{height: 'auto'}}>
            <DeepContent>
              <h2>Deep Dive in RAI.finance</h2>
              <div className="boxes">
                <div className="box">
                  <img src={DeepFirst} alt="" />
                  <div className="account">9,870</div>
                  <div className="type">Users</div>
                </div>
                <div className="box">
                  <img src={DeepSecond} alt="" />
                  <div className="account">44,434</div>
                  <div className="type">Transaction</div>
                </div>
                <div className="box">
                  <img src={DeepThird} alt="" />
                  <div className="account">111</div>
                  <div className="type">Tokens supported in Social Trading</div>
                </div>
              </div>
            </DeepContent>
            <FifthContent>
              <div>
                <Row gutter={[48, 48]}>
                  <Col md={12} sm={24}>
                    <h2 id="Whitepaper">
                      Explore the SOFI at
                      <br />
                      <span>Rai Finance</span>
                    </h2>
                    <p>
                      SOFI, the native token for RAI Finance is an essential
                      component of the protocol and employs many functions in the
                      ecosystem.
                    </p>
                    <div className="tokenInfo">
                      <ul className="compenyList">
                        <li>
                          <img src={Bithumb} />
                        </li>
                        <li>
                          <img src={HuoBiGlobal} />
                        </li>
                        <li>
                          <img src={Sofimexc} />
                        </li>
                        <li>
                          <img src={PancakeSwap} />
                        </li>
                        <li>
                          <img src={Sofibb} />
                        </li>
                      </ul>
                    </div>
                    <Button type="primary" style={{ fontFamily: "Graphik-bold" }}>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="/RAI-Finance-WhitePaper.pdf"
                        className="elementor-item"
                      >
                        View the White Paper
                      </a>
                    </Button>
                  </Col>
                  <Col md={12} sm={24} xs={24}>
                    <GoverIssueBox
                      No="038"
                      Title="Revise the UI & UX of RAI Finance app"
                      voteCounts={31}
                      date={formatDate(new Date(1679815844000))}
                      state={4}
                    />
                    <BtnBox>
                      <div className="radio color">
                        <div className="inner">
                          <div className="icon"></div>
                          <div className="text">Approve</div>
                        </div>
                        <Radio />
                      </div>
                      <div className="radio">
                        <div className="inner">
                          <div className="icon"></div>
                          <div className="text">Disapprove</div>
                        </div>
                        <Radio />
                      </div>
                      <Button
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
                      </Button>
                    </BtnBox>
                  </Col>
                </Row>
              </div>
            </FifthContent>
            <div className="footer">
              <div className="content">
                <div>
                  <Copyright>
                    <img className="footer_logo" src={Logo} alt="logo" />
                    Copyrights © 2022 RAI.Finance All rights reserved.
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
          </section>
      {/* </ReactPageScroller> */}
      </main>
      </Content>
    </Layout>
  );
};

export default Home;
