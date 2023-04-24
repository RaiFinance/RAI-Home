import React, {useEffect, useState, useRef, useCallback} from 'react'
import { Anchor, Layout, Menu, Row, Col, Button, List, Card, Avatar, Carousel, Radio, Input, Slider as SliderC } from 'antd';
import { CSSTransition } from "react-transition-group";
import { MenuOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import Swiper,{SwipeRef} from 'react-tiga-swiper'
import ReactPlayer from "react-player";
import styled from 'styled-components'
import Logo from '../../assets/images/logo-dark.png'
import Image1 from '../../assets/images/home/image1.jpg'
import Image2 from '../../assets/images/home/image2.png'
import Image3 from '../../assets/images/home/image3.png'
import Image4 from '../../assets/images/home/image4.png'
import Team1 from '../../assets/images/home/team04-01.png';
import Team2 from '../../assets/images/home/team05-01.png';
import Team3 from '../../assets/images/home/team06-01.png';
import RAIToken from '../../assets/images/home/RAIToken.png'
import Bithumb from '../../assets/images/home/Bithumb.png'
import HuoBiGlobal from '../../assets/images/home/HuoBiGlobal.png'
import Dodo from '../../assets/images/home/Dodo.png'
import PancakeSwap from '../../assets/images/home/PancakeSwap.png'
import CrossChain from '../../assets/images/home/CrossChain.png'
import SocialTrading from '../../assets/images/home/SocialTrading.png'
import UniqueAsset from '../../assets/images/home/UniqueAsset.png'
import {ReactComponent as KLAYswap} from '../../assets/images/home/KLAYswap.svg'
import IDO from '../../assets/images/home/IDO.png'
//@ts-ignore
import STSMp4 from '../../assets/images/home/mp4/sts.gif'
//@ts-ignore
import AggregatorMp4 from '../../assets/images/home/mp4/aggregator.gif'
//@ts-ignore
import GovernanceMp4 from '../../assets/images/home/mp4/governance.gif'
//@ts-ignore
import WalletMp4 from '../../assets/images/home/mp4/my-wallet.gif'
import SocialTradingGIF from '../../assets/images/home/Social-Trading.gif'
import UniqueAssetGIF from '../../assets/images/home/Unique-Asset.gif'
import IDOGIF from '../../assets/images/home/IDO.gif'
import Alphabit from '../../assets/images/home/Alphabit.png'
import NGC from '../../assets/images/home/NGC.png'
import TheLeagueofTraders from '../../assets/images/home/TheLeagueofTraders.png'
import Avalanche from '../../assets/images/home/AVALANCHE.png'
import Chainlink from '../../assets/images/home/Chainlink.png'
import Cobak from '../../assets/images/home/cobak.png'
import Litentry from '../../assets/images/home/Litentry.png'
import Launchpsl from '../../assets/images/home/Launchpsl.png'
import Thegraph from '../../assets/images/home/thegraph.png'
import KPA from '../../assets/images/home/KPA.png'
import Bounce from '../../assets/images/home/Bounce.png'
import Tidal from '../../assets/images/home/TIDAL.png'
import Darwinia from '../../assets/images/home/DARWINIA.png'
import Inverst from '../../assets/images/home/Invest.png'
import Communicate from '../../assets/images/home/Communicate.png'
import Analyze from '../../assets/images/home/Analyze.png'
import Bibox from '../../assets/images/home/Bibox.png'
import Bitwell from '../../assets/images/home/Bitwell.png'
import ETH_Ploygon from '../../assets/images/home/eth_polygon.png'
import whitepaper from '../../assets/images/home/whitepaper.jpg'
import SofiToken from '../../assets/images/home/sofitoken.png'
import {ReactComponent as InvestIcon} from '../../assets/images/home/Invest.svg'
import {ReactComponent as AnalyzeIcon} from '../../assets/images/home/Analyze.svg'
import {ReactComponent as DaoIcon} from '../../assets/images/home/Dao.svg'
import {ReactComponent as TwitterLogo} from '../../assets/images/home/svg/Twitter.svg'
import {ReactComponent as MediumLogo} from '../../assets/images/home/svg/Medium.svg'
import {ReactComponent as TelegramLogo} from '../../assets/images/home/svg/Telegram.svg'
import {ReactComponent as GithubLogo} from '../../assets/images/home/svg/Github.svg'
import {ReactComponent as KakaoLogo} from '../../assets/images/home/svg/Kakao.svg'
import {ReactComponent as WeiboLogo} from '../../assets/images/home/svg/Weibo.svg'
import './index.less';
import DeepFirst from '../../assets/images/home/deepOne.svg'
import DeepSecond from '../../assets/images/home/deepSecond.svg'
import DeepThird from '../../assets/images/home/deepThird.svg'
import Sofipk from '../../assets/images/home/box/pk.png'
import Sofimexc from '../../assets/images/home/box/mexc.png'
import Sofihb from '../../assets/images/home/box/hb.png'
import Sofibt from '../../assets/images/home/box/bitumb.png'
import Sofibb from '../../assets/images/home/box/bibox.png'
import swapImg from '../../assets/images/home/box/swap.png'
import SwapSvg from '../../assets/images/home/box/swap.svg'
import TradingImg from '../../assets/images/home/box/trading.png'
import TradingSvg from '../../assets/images/home/box/trading.svg'
import ChartImg from '../../assets/images/home/box/chart.png'
import ChartSvg from '../../assets/images/home/box/chart.svg'
import LineImg from '../../assets/images/home/box/line.png'
import LineSvg from '../../assets/images/home/box/line.svg'
import RaiImg from '../../assets/images/home/box/rai.png'
import RaiSvg from '../../assets/images/home/box/rai.svg'
import Graph1 from '../../assets/images/home/box/1.svg'
import Graph2 from '../../assets/images/home/box/2.svg'
import Graph3 from '../../assets/images/home/box/3.svg'


// https://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@github.com/RaiFinance/RAI-Home

const { Header, Sider, Content } = Layout;
const { Link } = Anchor;
const HeaderContent = styled.div`
    max-width: 1200px;
    padding: 0 50px;
    @media (max-width: 767px) {
        padding: 0 20px;

        
    }
`

const FirstContent = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: url(${Image1}) no-repeat;
    background-size: cover;
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        // padding: 150px 300px;
        padding: 135px;
        @media (max-width: 992px) {
            &:before{
                display: none;
            }
        }
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 100px 20px;
        }
        .ant-btn{
            display: block;
            margin: 0 auto;
        }
    }
    h1{
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
    p{
        font-family: 'Graphik';
        color: #71717A;
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
    .launched{
        color: #6B7280;
        font-size: 12px;
        margin-top: 100px;
    }
    .eth_ploygon{
        height:25px;
        margin: 0 auto;
        display: block;
        width: auto;
    }
`

const SecondContent = styled.div`
    background: #F3F4F6;
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 100px 50px;
        @media (max-width: 767px) {
            padding: 100px 20px;
        }
        .ant-btn{
            margin: 0 auto;
            display: block;
        }
    }
`

const DeepContent = styled.div`
    background: #F3F4F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 0px;
    justify-content: center;
    h2 {
        font-family: 'Graphik-bold';
        margin-bottom: 48px;
        color: #18181B;
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
        }
        .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 336px;
            height: 174px;
            background: #FFFFFF;
            border-radius: 12px;
            margin-right: 24px;
            padding: 24px 0px;
            @media (max-width: 767px) {
                margin-right: 0x;
                margin-bottom: 24px;
            }
            img {
                margin-bottom: 12px;
                width: 64px;
                height: 64px;
            }
            .account {
                margin-bottom: 4px;
                font-family: 'Graphik-bold';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 26px;
                text-align: center;
                color: #18181B;
            }
            .type {
                font-family: 'Graphik';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                text-align: center;
                color: #18181B;
            }
        }
    }
`

const FlowContent = styled.div`
    width: 100%;
    padding: 48px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    button {
        font-family: 'Graphik';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
    .item {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        width :100% !important;
        margin-bottom: 96px;
        @media (max-width: 767px) {
            flex-direction: column;
        }
        .left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            @media (max-width: 767px) {
                align-items: center;
            }
            h2 {
                font-family: 'Graphik-bold';
                font-style: normal;
                font-weight: 700;
                font-size: 48px;
                line-height: 64px;
                text-align: center;
                margin-bottom: 24px;
                @media (max-width: 767px) {
                    font-size: 32px;
                }
            }
            .btnText {
                font-family: 'Graphik';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                // text-transform: uppercase;
                color: #FFFFFF;
                span {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 20px;
                    // text-transform: uppercase;
                    color: #FFFFFF;
                    font-family: 'Graphik';
                }
            }
        }
        .right {
            cursor: pointer;
            img {
                // width: 420px;
                // height: 360px;
                background-size: 100%;
                margin-right: -50px;
            }
        }
    }
`

const SofiContent = styled.div`
    width: 100%;
    background: #FFFFFF;
    margin: 0 auto;
    padding-top: 96px;
    height: 1124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1200px;
    @media (max-width: 767px) {
        padding: 0 20px;
    }
    .head {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 48px;
        @media (max-width: 767px) {
            
        }
        &>div {
            font-family: 'Graphik';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 26px;
            text-align: center;
            color: #71717A;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        h2 {
            font-family: 'Graphik-bold';
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
        margin-bottom: 48px;
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
            font-family: 'Graphik-bold';
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
                height: 248px;
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
            font-family: 'Graphik-bold';
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


`

const ThirdContent = styled.div`
    background: #fff;
    &>div{
        margin: 0px auto;
        max-width: 1200px;
        padding: 100px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 100px 20px;
        }
    }
    ul{
        list-style: none;
        font-size: 16px;
        line-height: 40px;
        color: #79869F;
        padding: 0;
    }
`

const FourthContent = styled.div`
    background: #F3F4F6;
    padding: 100px 0;
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 0 20px;
            margin-top: -10px;
        }
    }
    .product{
        position: relative;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: -25%;
            width: 100%;
            height: 100%;
            background: url(${Image3}) no-repeat;
            background-size: 65%;
            background-position: center;
        }
        @media (max-width: 767px) {
            &:before{
                display: none;
            }
        }
        h3{
            margin-top: 0;
            font-weight: 700;
            font-size:24px;
        }
        .img{
            display: none;
            @media (max-width: 767px) {
                display: block;
            }
        }
    }
`
const FifthContent = styled.div`
    background: #fff;
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 100px 50px;
        @media (max-width: 767px) {
            padding: 100px 20px;
        }
    }
    .whitepaper{
        @media (max-width: 767px) {
            text-align: center;
        }
        .img{
            width: 100%;
            margin-top: 20px;
            @media (max-width: 767px) {
                width: 100%;
                height: auto;
            }
        }
    }
    .tokenDes{
        text-align: left;
        font-size: 14px;
        line-height: 24px;
        color: #79869F;
        display: block;
        width: 500px;
        @media (max-width: 767px) {
            width: 100%;
        }
    }
    h2{
        font-weight: 700;
        font-size: 48px;
        color: #111827;
        font-family: 'Graphik-bold';
        span{
            color: #5542F6;
        }
        @media (max-width: 767px) {
            font-size: 40px;
        }
    }
    h3{
        margin-top: 0;
        font-weight: 700;
        font-size: 16px;
        color: #111827;
    }
    p{
        color: #6B7280;
        font-size: 20px;
    }

`
const SixthContent = styled.div`
    background: rgba(255, 255, 255, 0.6);
    &>div{
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
    p{
        padding: 20px 100px;
        text-align: center;
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    .ant-card-body{
        margin: 0 auto;
        text-align: center;
    }
`

const SeventhContent = styled.div`
    background: #fff;
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 100px 50px;
        @media (max-width: 767px) {
            padding: 20px;
        }
        h2 {
            font-family: 'Graphik-bold';
        }
    }
`
const StyledLink = styled.a`
    display: inline-block;
    margin: 0 10px;
    border-radius: 8px;
    svg{
        width: 32px;
        .cls-1{fill:#fff;}
        .cls-2{fill:#6B7280;}
        &:hover{
            .cls-1{fill:#6B7280;}
            .cls-2{fill:#3C17B8;}
        }
    }
`

const Copyright = styled.div`
    font-size: 12px
`

export const GoverIssue = styled.div<{ width?: any, height?: any }>`
    width: ${({ width }) => width || '320px'};
    height: ${({ height }) => height || '132px'};
    border: 1px solid #E4E4E7;
    border-radius: 12px;
    padding: 16px;
    .first {
        width: 100%;
        height: 16px;
        line-height: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: #71717A;
        margin-bottom: 12px;
        .link {
            color: #5542F6;
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
            color: #71717A;
            font-size: 12px;
            margin-bottom: 4px;
        }
        .off {
            font-family: 'Graphik';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #18181B;
            margin-bottom: 20px;
        }
      }
      .third {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tag{
            padding: 0px 4px;
            margin-right: 10px;
            font-weight: 600;
            font-size: 12px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border-radius: 4px;
            color: #fff;
            &.active{
                background: #F4F4F5; 
                color: #18181B;
            }
            &.soon{
                background: #5542F6;
            }
            &.closed,&.canceled{
                background: #A1A1AA;
            }
        }
        .date {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #71717A;
          }
      }
`

const BtnBox = styled.div`
    width: 320px;
    min-height: 200px;
    border: 1px solid #E4E4E7;
    border-radius: 12px;
    padding: 16px;
    margin-top: 24px;
    .radio {
        width: 288px;
        height: 48px;
        background: #FFFFFF;
        border: 2px solid #E4E4E7;
        border-radius: 8px;
        display: flex;
        padding: 0px 20px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        .inner {
            display: flex;
            align-items: center;
            &>div {
                margin-right: 8px;
            }
        }
        .icon {
            width: 20px;
            height: 20px;
            background: #C4C4C4;
            opacity: 0.5;
        }
    }
    .color {
        border: 2px solid #5542F6;
    }
`

export const PortfolioGraph = styled.div`
    width: 420px;
    height: 360px;
    background: #FFFFFF;
    box-shadow: 0px 8px 48px -1px rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 24px;
    padding: 24px;
    .item-1 {
        padding: 16px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
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
                    color: #18181B;
                    font-family: 'Graphik-bold';
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
                background: #5542F6;
            }
            .ant-slider-handle {
                border: solid 2px #5542F6;
            }
        }
    }
`

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
      8: <span>passed</span>
    }
    return STATUS[state]
  }

  export const proposalStateColor: { [state: number]: string } = {
    0: '#9A9A9A',
    1: '#018526',
    2: '#9A9A9A',
    3: '#9A9A9A',
    4: '#018526',
    5: '#018526',
    6: '#9A9A9A',
    7: '#018526',
    8: '#018526'
  }

  export const formatDollarAmount = (num: any, digits: any) => {
    const formatter = new Intl.NumberFormat([], {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    })
    return formatter.format(num)
  }



const Home: React.FC = () =>  {
    const GoverIssueBox: React.FC<any> = (props) => {
        const { date, voteCounts, state, contract, proposalId, width, height, subTitle } = props;
        return (
            <GoverIssue width={width} height={height}>
                <div className='first'>
                    <div>SOFIP-022</div>
                    <div className='link'>on-chain</div>
                </div>
                <div className='second'>
                    <div className='on'>{ subTitle || 'Edit Portfolio List' }</div>
                    <div className='off'>Delist $LUNA from the portfolio list</div>
                </div>
                <div className='third'>
                    <div className={`tag ${state === 0 ? 'soon' : (state === 1 || state === 4 || state === 5 || state === 7 || state === 8) ? 'active' : 'closed'}`} color={proposalStateColor[state]}>
                    {proposalStatus(state)}
                    </div>
                    <div className='date'>Ended at { date }</div>
                </div>
                {/* <div className='result'>
                        <div className={`tag ${state === 0 ? 'soon' : (state === 1 || state === 4 || state === 5 || state === 7 || state === 8) ? 'active' : 'closed'}`} color={proposalStateColor[state]}>
                        {proposalStatus(state)}
                        </div>
                    <div className='count'>{ 31 } Voted</div>
                </div>
                <div className='date'>Ended at { date }</div> */}
            </GoverIssue>
        )
    }
    const getCustomPaging = (i: number) => {
        switch (i) {
            case 1: 
                return <><h2>STS</h2><p>Social Trading System combines both digital asset trading and socializing</p></>
            case 2: 
                return <><h2>Aggregator</h2><p>The fastest way to trade your multi-chain assets</p></>
            case 3: 
                return <><h2>Governance</h2><p>Decentralized governance to participate in the protocol upgrade</p></>
            case 4: 
                return <><h2>My Wallet</h2><p>Check your asset status and rebalance your portfolio</p></>
        }
    }
    const settings = {
        customPaging: function(i: number) { return <a>{getCustomPaging(i+1)}</a> },
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
    const [ pageData, setPageData ] = useState<any>({ pageY: 0 });
    const carouselRef = useRef<any>()
    const productRef = useRef<any>()
    let y = 0
    const { current } = useRef<any>({
        isScroll: true,
        timer: null,
        delay: 100,
    });
    let slideNum = 0;
    const denounceCB = useCallback((e) => {
        if (current.isScroll) {
            current.isScroll = false;
            if (!y) {
                y = e.deltaY;
            } else {
                if (carouselRef && carouselRef.current && slideNum === 6 && e.deltaY) {
                    slideNum -= 1;
                    scrollTo('Sofi');
                    return;
                }
                if (carouselRef && carouselRef.current && slideNum === 0 && !e.deltaY) {
                    scrollTo('Join');
                    return;
                }
                const currentSlide = carouselRef && carouselRef.current && carouselRef.current.innerSlider.state.currentSlide;
                if (e.deltaY >= 0) { // 下滑
                    slideNum += 1;
                    carouselRef && carouselRef.current && carouselRef.current.goTo(slideNum > 6 ? 6 : slideNum);
                } else { // 上滑
                    slideNum -= 1;
                    carouselRef && carouselRef.current && carouselRef.current.goTo(slideNum < 0 ? 0 : slideNum);
                }
                y = e.deltaY;
            }
        }
        if (current && current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
            current.isScroll = true;
        }, 100)
    }, []);

    useEffect(() => {
        productRef && productRef.current && productRef.current.addEventListener('wheel', (e: any) => {
            e.preventDefault();
            return denounceCB(e)
        }, { passive: false })
        return () => {
            window.addEventListener('wheel', denounceCB, { passive: true })
        }
    }, [productRef])

    const goTo = (index: number) => {
        if(carouselRef.current){
            carouselRef.current.goTo(index);
        }
    }

    const scrollHeader = () => {
        if (!document.querySelector('.ant-layout-header')) {
            return;
        }

        var scrollTop = document.documentElement.scrollTop;
        let height = 128;
        if (scrollTop < 0) {
            height = 128
        } else if (scrollTop < 256) {
            height = 128 - 0.21875 * scrollTop
        } else {
            height = 72
        }
        setScrollHeight(height)
    }

    const scrollTo = (element: string) => {
        const doc: any = document.getElementById(`${element}`);
        if (doc) {
            doc.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
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

    const handleTouchMove = (e: any) => {
        console.log('move', e)
    }

    const handleTouchStart = (e: any) => {
        console.log('start', e)
    }

    const handleTouchEnd = (e: any) => {
        console.log('end', e)
    }

    const handleScroll = (e: any) => {
    }

    return (
        <Layout className="homePage">
            {/* <HeaderNotification>
                <a href="https://medium.com/rai-finance/rai-finance-launches-global-mainnet-event-ac789ea8756d" target="_blank">Try RAI Finance main net product and win $50000 USD reward!</a>
            </HeaderNotification> */}
            <Header>
                <HeaderContent className="header" style={{height: `${isSmallScreen ? 64 : scrollHeight}px`}}>
                    <img className="Logo" src={Logo} alt="logo" />
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('Product');}}>Product</a>
                            <a target="_blank" rel="noopener" href="/RAI-Finance-WhitePaper.pdf">Whitepaper</a>
                            <a target="_blank" href="https://rai-finance.notion.site/62225248bc054e1eb7ff14f8def9b17e?v=3ea69551a4a943169d4d04a8bcc8f838">Roadmap</a>
                            <a target="_blank" href="https://rai-finance.gitbook.io/rai-finance/">Wiki</a>
                            <a target="_blank" href="https://www.certik.com/projects/rai-finance">Audit</a>
                            <Button type="primary"><a target="_blank" href="https://app.rai.finance">Launch App</a></Button>
                        </nav>
                    </CSSTransition>
                    <button onClick={toggleNav} className="Burger">
                        <MenuOutlined />
                    </button>
                </HeaderContent>
            </Header>
            <Content>
                <FirstContent id='Join'>
                    <div>
                        <h1>
                        Join the new era of SocialFi
                        </h1>
                        <p>
                            RAI Finance is a decentralized finance and social platform, 
                            powered by blockchain technology and governed by a community DAO. 
                            Its main features include Predict, Social trading, Social hub, 
                            and Aggregator, making it the center hub of DeFi and Social in the Web3 world. 
                            With its launch in 2020, RAI Finance is now available on multiple blockchain networks, 
                            providing innovation and accessibility to its users.
                        </p>
                        <Button type="primary"><a href="https://app.rai.finance" target="_blank">ENTER MAINNET</a></Button>
                        <p className='launched'>RAI Finance product is officially launched on</p>
                        <img className='eth_ploygon' src={ETH_Ploygon} alt="" />
                    </div>
                </FirstContent>
                {/* <SecondContent>
                    <div>
                        <h2 id="Finance">What is RAI Finance?</h2>
                        <p>RAI Finance aims to become the epicenter of Web 3.0 decentralized finance. Based on cross-chain technology and various ecosystems, RAI Finance is creating a new decentralized finance service with realizing a polymerized connection of generating index tokens, cross-chain trading and socialization with the other digital asset traders.</p>
                        <Row
                            gutter={[24, 24]}
                            className="raiFinance"
                        >
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <div className='item'>
                                    <div className='avator'>
                                        <img 
                                            src={CrossChain} 
                                        />
                                    </div>
                                    <h2>Cross Chain</h2>
                                    <p>Use Social Trading System and Aggregated Swap on heterogeneous blockchain</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <div className='item'>
                                    <div className='avator'>
                                        <img 
                                            src={SocialTrading} 
                                        />
                                    </div>
                                    <h2>Social Trading</h2>
                                    <p>Combination of digital asset trading and socializing</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <div className='item'>
                                    <div className='avator'>
                                        <img 
                                            src={UniqueAsset} 
                                        />
                                    </div>
                                    <h2>Unique Asset</h2>
                                    <p>
                                    Customize your portfolio with various assets to match your needs.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </SecondContent> 
                <ThirdContent>
                    <div>
                        <h2 className="defiTitle">Socialize Your DeFi Experience</h2>
                        <p>Share Investment Set, Communicate with KOL, Analyze investment data and Invest with professionals</p>

                        <div className="defiCarousel">
                            <div className="item">
                                <Button type="link" icon={<DaoIcon/>}>Share</Button>
                                <img src={Inverst}/>
                            </div>
                            <div className="item">
                                <Button type="link" icon={<AnalyzeIcon/>}>Analyze</Button>
                                <img src={Analyze}/>
                            </div>
                            <div className="item">
                                <Button type="link" icon={<InvestIcon/>}>Invest</Button>
                                <img src={Communicate}/>
                            </div>
                        </div>
              
                    </div>
                </ThirdContent>
                
                <FourthContent id="Product">
                    <div>
                        <h2>RAI Finance Product</h2>
                        <p>With our cross-chain technology and various ecosystems, users of RAI Finance can explore features such as creating index tokens, cross-chain trading and socialization with the other digital asset traders.</p>
                        <div className="products">
                            <Slider {...settings}>
                                <div className="item">
                                    
                                    <img src={STSMp4}/>
                                </div>
                                <div className="item">
                                    
                                    <img src={AggregatorMp4}/>
                                </div>
                                <div className="item">
                                    
                                    <img src={GovernanceMp4}/>
                                </div>
                                <div className="item">
                                    
                                    <img src={WalletMp4}/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </FourthContent> */}
                <FlowContent ref={ productRef } id='Product' onScrollCapture={handleScroll} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <Carousel dots={false} dotPosition='right' ref={carouselRef}>
                        <div className='item'>
                            <div className='left'>
                                <h2>Take Your Choice</h2>
                                <Button type='primary' className='btnText' onClick={() => window.open('https://app.rai.finance/#/predict')}>Select Yes or No</Button>
                            </div>
                            <div className='right'>
                                <img src={ TradingSvg } alt="" />
                            </div>
                        </div>
                        <div className='item'>
                            <div className='left'>
                                <h2>Keep Or Sell</h2>
                                <Button type='primary' className='btnText' onClick={() => window.open('https://app.rai.finance/#/predict')}>Select Yes or No</Button>
                            </div>
                            <div className='right'>
                                <img src={ TradingSvg } alt="" />
                            </div>
                        </div>
                        <div className='item'>
                            <div className='left'>
                                <h2>Create your Portfolio</h2>
                                <Button type='primary' className='btnText' onClick={() => window.open('https://app.rai.finance/#/sts/create')}>Create Portfolio</Button>
                            </div>
                            {/* <div className='right' onClick={() => window.open('https://app.rai.finance/#/sts/create')}>
                                <img src={ ChartSvg } alt="" />
                            </div> */}
                            <PortfolioGraph>
                                <div className='item-1'>
                                    <div className='head'>
                                        <div className='headIn'>
                                            <img src={ Graph1 } alt="" />
                                            <span>CAPS</span>
                                        </div>
                                        <CloseOutlined />
                                    </div>
                                    <div className='body'>
                                        <Input defaultValue={'15%'}/>
                                    </div>
                                    <div className='foot'>
                                        <SliderC defaultValue={30} />
                                    </div>
                                </div>
                                <div className='item-1'>
                                    <div className='head'>
                                        <div className='headIn'>
                                            <img src={ Graph2 } alt="" />
                                            <span>PEOPLE</span>
                                        </div>
                                        <CloseOutlined />
                                    </div>
                                    <div className='body'>
                                        <Input defaultValue={'15%'}/>
                                    </div>
                                    <div className='foot'>
                                        <SliderC defaultValue={30} />
                                    </div>
                                </div>
                                <div className='item-1'>
                                    <div className='head'>
                                        <div className='headIn'>
                                            <img src={ Graph3 } alt="" />
                                            <span>CVX</span>
                                        </div>
                                        <CloseOutlined />
                                    </div>
                                    <div className='body'>
                                        <Input defaultValue={'15%'}/>
                                    </div>
                                    <div className='foot'>
                                        <SliderC defaultValue={30} />
                                    </div>
                                </div>
                            </PortfolioGraph>
                        </div>
                        <div className='item'>
                            <div className='left'>
                                <h2>Pick Your Token</h2>
                                <Button type='primary' className='btnText' onClick={() => window.open('https://app.rai.finance/#/sts/create')}>Create Portfolio</Button>
                            </div>
                            {/* <div className='right'>
                                <img src={ ChartSvg } alt="" />
                            </div> */}
                            <PortfolioGraph>
                                <div className='item-1'>
                                    <div className='head'>
                                        <div className='headIn'>
                                            <img src={ Graph1 } alt="" />
                                            <span>CAPS</span>
                                        </div>
                                        <CloseOutlined />
                                    </div>
                                    <div className='body'>
                                        <Input defaultValue={'15%'}/>
                                    </div>
                                    <div className='foot'>
                                        <SliderC defaultValue={30} />
                                    </div>
                                </div>
                                <div className='item-1'>
                                    <div className='head'>
                                        <div className='headIn'>
                                            <img src={ Graph2 } alt="" />
                                            <span>PEOPLE</span>
                                        </div>
                                        <CloseOutlined />
                                    </div>
                                    <div className='body'>
                                        <Input defaultValue={'15%'}/>
                                    </div>
                                    <div className='foot'>
                                        <SliderC defaultValue={30} />
                                    </div>
                                </div>
                                <div className='item-1'>
                                    <div className='head'>
                                        <div className='headIn'>
                                            <img src={ Graph3 } alt="" />
                                            <span>CVX</span>
                                        </div>
                                        <CloseOutlined />
                                    </div>
                                    <div className='body'>
                                        <Input defaultValue={'15%'}/>
                                    </div>
                                    <div className='foot'>
                                        <SliderC defaultValue={30} />
                                    </div>
                                </div>
                            </PortfolioGraph>
                        </div>
                        <div className='item'>
                            <div className='left'>
                                <h2>Manage it Efficiently</h2>
                                <Button type='primary' className='btnText' onClick={() => window.open('https://app.rai.finance/#/sts')}>Show Social Trading</Button>
                            </div>
                            <div className='right'>
                                <img src={ LineSvg } alt="" />
                            </div>
                        </div>
                        <div className='item'>
                            <div className='left'>
                                <h2>Just for you</h2>
                                <Button type='primary' className='btnText' onClick={() => window.open('https://app.rai.finance/#/sts')}>Show Social Trading</Button>
                            </div>
                            <div className='right'>
                                <img src={ LineSvg } alt="" />
                            </div>
                        </div>
                        <div className='item'>
                            <div className='left'>
                                <h2>Everything in RAI Finance</h2>
                                <Button type='primary' className='btnText' onClick={() => window.open('https://app.rai.finance/#/')}>Go To App</Button>
                            </div>
                            <div className='right'>
                                <img src={ RaiSvg } alt="" />
                            </div>
                        </div>
                    </Carousel>
                    {/* <div className='item'>
                        <div className='left'>
                            <h2>Take Your Choice</h2>
                            <Button type='primary'>SELECT YES OR NO</Button>
                        </div>
                        <div className='right' onClick={() => window.open('https://app.rai.finance/#/predict')}>
                            <img src={ TradingSvg } alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h2>Keep Or Sell</h2>
                            <Button type='primary'>SELECT YES OR NO</Button>
                        </div>
                        <div className='right' onClick={() => window.open('https://app.rai.finance/#/predict')}>
                            <img src={ TradingSvg } alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h2>Create your Portfolio</h2>
                            <Button type='primary'>SELECT YES OR NO</Button>
                        </div>
                        <div className='right' onClick={() => window.open('https://app.rai.finance/#/sts/create')}>
                            <img src={ ChartSvg } alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h2>Pick Your Token</h2>
                            <Button type='primary'>SELECT YES OR NO</Button>
                        </div>
                        <div className='right' onClick={() => window.open('https://app.rai.finance/#/sts/create')}>
                            <img src={ ChartSvg } alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h2>Manage it Efficiently</h2>
                            <Button type='primary'>SELECT YES OR NO</Button>
                        </div>
                        <div className='right' onClick={() => window.open('https://app.rai.finance/#/sts')}>
                            <img src={ LineSvg } alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h2>Just for you</h2>
                            <Button type='primary'>SELECT YES OR NO</Button>
                        </div>
                        <div className='right' onClick={() => window.open('https://app.rai.finance/#/sts')}>
                            <img src={ LineSvg } alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h2>Everything in RAI Finance</h2>
                            <Button type='primary'>SELECT YES OR NO</Button>
                        </div>
                        <div className='right' onClick={() => window.open('https://app.rai.finance/#/')}>
                            <img src={ RaiSvg } alt="" />
                        </div>
                    </div> */}
                </FlowContent>
                <SofiContent id='Sofi'>
                    <div className='head'>
                        <h2>Anything else?</h2>
                        <div>Share Investment Set, Communicate with KOL, Analyze investment data and Invest with professionals</div>
                    </div>
                    <div className='swap'>
                        <h2>swap</h2>
                        <div className='box'>
                            <img src={ SwapSvg } alt="" />
                        </div>
                    </div>
                    <div className='gover'>
                        <h2>Governance</h2>
                        <div className='box' onClick={() => { window.open('https://app.rai.finance/#/proposals') }}>
                            <GoverIssueBox subTitle="Edit Portfolio List" height={'100%'} width={'100%'} className='issue' voteCounts={ 31 }  date={ Date.now() } state={ 1 } />
                        </div>
                        <div className='box' onClick={() => { window.open('https://app.rai.finance/#/proposals') }}>
                            <GoverIssueBox subTitle="Marketing Campaign" height={'100%'} width={'100%'} voteCounts={ 31 }  date={ Date.now() } state={ 1 } />
                        </div>
                    </div>
                    <Button type="primary" style={{ fontFamily: 'Graphik-bold', width: '320px' }}><a target="_blank" rel="noopener" href="https://app.rai.finance/#/" className="elementor-item">Go To App</a></Button>
                </SofiContent>
                <DeepContent>
                    <h2>Deep Dive in RAI.finance</h2>
                    <div className='boxes'>
                        <div className='box'>
                            <img src={ DeepFirst } alt="" />
                            <div className='account'>9,870</div>
                            <div className='type'>Users</div>
                        </div>
                        <div className='box'>
                            <img src={ DeepSecond } alt="" />
                            <div className='account'>44,434</div>
                            <div className='type'>Transition</div>
                        </div>
                        <div className='box'>
                            <img src={ DeepThird } alt="" />
                            <div className='account'>$2,284,561</div>
                            <div className='type'>Transaction volume</div>
                        </div>
                    </div>
                </DeepContent>
                <FifthContent>
                    <div>
                        <Row gutter={[48, 48]}>
                            <Col md={12} sm={24}>
                                <h2 id="Whitepaper">Explore the SOFI at<br/><span>Rai Finance</span></h2>
                                <p>SOFI, the native token for RAI Finance is an essential component of the protocol and employs many functions in the ecosystem.</p>
                                <div className='tokenInfo'>
                                    <ul className="compenyList">
                                        <li><img src={Bithumb}/></li>
                                        <li><img src={HuoBiGlobal}/></li>
                                        <li><img src={Sofimexc}/></li>
                                        <li><img src={PancakeSwap}/></li>
                                        <li><img src={Sofibb}/></li>
                                    </ul>
                                </div>
                                <Button type="primary" style={{ fontFamily: 'Graphik-bold' }}><a target="_blank" rel="noopener" href="/RAI-Finance-WhitePaper.pdf" className="elementor-item">View the White Paper</a></Button>
                            </Col>
                            <Col md={12} sm={24} xs={24}>
                                <GoverIssueBox voteCounts={ 31 }  date={ Date.now() } state={ 1 } />
                                <BtnBox>
                                    <div className='radio color'>
                                        <div className='inner'>
                                            <div className='icon'></div>
                                            <div className='text'>Approve</div>
                                        </div>
                                        <Radio/>
                                    </div>
                                    <div className='radio'>
                                        <div className='inner'>
                                            <div className='icon'></div>
                                            <div className='text'>Disapprove</div>
                                        </div>
                                        <Radio/>
                                    </div>
                                    <Button style={{ width: '100%', fontFamily: 'Graphik-bold' }} type="primary"><a target="_blank" rel="noopener" href="/RAI-Finance-WhitePaper.pdf" className="elementor-item">Vote Now</a></Button>
                                </BtnBox>
                            </Col>
                        </Row>
                    </div>
                </FifthContent>
                {/* <SixthContent>
                    <div>
                        <h2 id="Team" style={{textAlign: 'center'}}>Team</h2>  
                        <p> The team consists of Korea, China and the western English speaking countries members.
Each of them has expertise in their local markets, and with average 3+ years’ experience in blockchain industry.</p>
                        <List
                            grid={{
                                gutter: 30,
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 2,
                                xl : 2,
                                xxl: 2
                            }}
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <Card 
                                    className="teamCard"
                                    bordered={false}
                                    cover={
                                        <Avatar size={{ xs: 100, sm: 100, md: 100, lg: 180, xl: 180, xxl: 180 }} src={item.img} />
                                    }
                                >
                                    <h2>{item.title}</h2>
                                    <div className="des">
                                        <Avatar size={64} src={item.img} />
                                        <h2 className="name">{item.title}</h2>
                                        {item.des}
                                    </div>
                                </Card>
                            </List.Item>
                            )}
                        />
                    </div>
                </SixthContent> */}
                <SeventhContent>
                    <div>
                        <h2 style={{textAlign: 'center'}}>Contributors</h2>
                        <div
                            className="parteners"
                        >
                            <div>
                                <img src={Alphabit}/>
                            </div>
                            <div>
                                <img src={NGC}/>
                            </div>
                            <div>
                                <img src={TheLeagueofTraders}/>
                            </div>
                            <div>
                                <img src={Avalanche}/>
                            </div>
                        </div>
                        <div
                            className="parteners2"
                        >
                            <div>
                                <img src={Chainlink}/>
                            </div>
                            <div>
                                <img src={Cobak}/>
                            </div>
                            <div>
                                <img src={Litentry}/>
                            </div>
                            <div>
                                <img src={Launchpsl}/>
                            </div>
                            <div>
                                <img src={Thegraph}/>
                            </div>
                        </div>
                        <div className="parteners">
                            <div>
                                <img src={KPA}/>
                            </div>
                            <div>
                                <img src={Bounce}/>
                            </div>
                            <div>
                                <img src={Tidal}/>
                            </div>
                            <div>
                                <img src={Darwinia}/>
                            </div>
                        </div>
                    </div>
                </SeventhContent>
                <div className='footer'>
                    <div className='content'>
                        <div>
                            <Copyright>
                                <img className="footer_logo" src={Logo} alt="logo" />
                                Copyrights © 2022 RAI.Finance All rights reserved.
                            </Copyright>  
                        </div>
                        <div>
                            <StyledLink target='_blank' href="https://github.com/RaiFinance">
                                <GithubLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink target='_blank' href="https://open.kakao.com/o/gLPmITEc">
                                <KakaoLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink target='_blank' href="https://medium.com/rai-finance">
                                <MediumLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink target='_blank' href="https://t.me/RaiFinance">
                                <TelegramLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink target='_blank' href="https://twitter.com/RaiFinance">
                                <TwitterLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink target='_blank' href="https://weibo.com/u/7583482257">
                                <WeiboLogo fill="#fff"/>
                            </StyledLink>
                        </div>
                    </div>
                </div>
            </Content>     
        </Layout>
    )
}

export default Home;