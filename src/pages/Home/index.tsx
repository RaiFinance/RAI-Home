import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Menu, Row, Col, Button, List, Card, Avatar, Carousel } from 'antd';
import { CSSTransition } from "react-transition-group";
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import Slider from "react-slick";
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
import STSMp4 from '../../assets/images/home/mp4/sts.mov'
//@ts-ignore
import AggregatorMp4 from '../../assets/images/home/mp4/aggregator.mov'
//@ts-ignore
import GovernanceMp4 from '../../assets/images/home/mp4/governance.mov'
//@ts-ignore
import WalletMp4 from '../../assets/images/home/mp4/my-wallet.mov'
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
        padding: 150px 300px;
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
        margin-bottom: 20px;
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
        font-size: 24px;
        color: #6B7280;
        font-weight: 400;
        text-align: center;
        line-height: 1.2;
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

const ThirdContent = styled.div`
    background: #fff;
    &>div{
        margin: 0 auto;
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

const Home: React.FC = () =>  {
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
    const carouselRef = useRef<any>()
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader, false);
        return () => {
            window.removeEventListener('scroll', scrollHeader, false);
        }
    }, [])

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

    return (
        <Layout className="homePage">
            {/* <HeaderNotification>
                <a href="https://medium.com/rai-finance/rai-finance-launches-global-mainnet-event-ac789ea8756d" target="_blank">Try RAI Finance main net product and win $50000 USD reward!</a>
            </HeaderNotification> */}
            <Header>
                <HeaderContent className="header" style={{height: `${scrollHeight}px`}}>
                    <img className="Logo" src={Logo} alt="logo" />
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a href="#Product">Product</a>
                            <a target="_blank" rel="noopener" href="/RAI Finance WhitePaper.pdf">Whitepaper</a>
                            <a target="_blank" href="https://rai-finance.notion.site/62225248bc054e1eb7ff14f8def9b17e?v=3ea69551a4a943169d4d04a8bcc8f838">Roadmap</a>
                            <a target="_blank" href="https://rai-finance.gitbook.io/rai-finance/">Wiki</a>
                            <Button type="default"><a target="_blank" href="https://sofi.rai.finance">RAI - SOFI</a></Button>
                            <Button type="primary"><a target="_blank" href="https://app.rai.finance">Launch App</a></Button>
                        </nav>
                    </CSSTransition>
                    <button onClick={toggleNav} className="Burger">
                        <MenuOutlined />
                    </button>
                </HeaderContent>
            </Header>
            <Content>
                <FirstContent>
                    <div>
                        <h1>
                        The Epicenter of Web 3.0 World
                        </h1>
                        <p>RAI Finance is a decentralized finance application that provides digital asset users with social trading system, aggregated swap on heterogeneous blockchains</p>
                        <Button type="primary"><a href="https://app.rai.finance" target="_blank">LAUNCH APP</a></Button>
                        <p className='launched'>RAI Finance product is officially launched on</p>
                        <img className='eth_ploygon' src={ETH_Ploygon} alt="" />
                    </div>
                </FirstContent>
                <SecondContent>
                    <div>
                        <h2 id="Finance">What is RAI Finance?</h2>
                        <p>RAI Finance aims to become the epicenter of Web 3.0 decentralized finance. Based on cross-chain technology and various ecosystems, RAI Finance is creating a new decentralized finance service with realizing a polymerized connection of generating index tokens, cross-chain trading and socialization with the other digital asset traders.</p>
                        <Row
                            gutter={[24, 24]}
                            className="raiFinance"
                        >
                            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
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
                            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
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
                            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
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
                                    <ReactPlayer
                                        url={STSMp4}
                                        playing={true}
                                        controls={true}
                                        loop={true}
                                        muted={true}
                                        playsinline={true}
                                        // onReady={onLoadedData}
                                    />
                                </div>
                                <div className="item">
                                    <ReactPlayer
                                        url={AggregatorMp4}
                                        playing={true}
                                        controls={true}
                                        loop={true}
                                        muted={true}
                                        playsinline={true}
                                        // onReady={onLoadedData}
                                    />
                                </div>
                                <div className="item">
                                    <ReactPlayer
                                        url={GovernanceMp4}
                                        playing={true}
                                        controls={true}
                                        loop={true}
                                        muted={true}
                                        playsinline={true}
                                        // onReady={onLoadedData}
                                    />
                                </div>
                                <div className="item">
                                    <ReactPlayer
                                        url={WalletMp4}
                                        playing={true}
                                        controls={true}
                                        loop={true}
                                        muted={true}
                                        playsinline={true}
                                        // onReady={onLoadedData}
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </FourthContent>
                <FifthContent>
                    <div>
                        <Row gutter={[48, 48]}>
                            <Col md={12} sm={24}>
                                <h2 id="Whitepaper">RAI Finance's<br/><span>Whitepaper</span></h2>
                                <p>SOFI, the native token for RAI Finance is an essential component of the protocol and employs many functions in the ecosystem.</p>
                                <Button type="primary"><a target="_blank" rel="noopener" href="/RAI Finance WhitePaper.pdf" className="elementor-item">View the White Paper</a></Button>
                                <div className='tokenInfo'>
                                    <h3 className="tokenName" >
                                        <img src={SofiToken} />
                                    </h3>
                                    <p>SOFI was rebranded from RAI since November 2021. For more details, please visit <a href="https://medium.com/rai-finance/rai-finances-brand-is-deeply-upgraded-to-socialization-token-ticker-is-changed-to-sofi-210123adf84f">RAI Finance Rebranding</a>
                                    </p>
                                    <ul className="compenyList">
                                        <li><img src={HuoBiGlobal}/></li>
                                        <li><img src={PancakeSwap}/></li>
                                        <li><img src={Dodo}/></li>
                                        <li><img src={Bithumb}/></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={12} sm={24} xs={24}>
                                <img className="img" src={whitepaper} />
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
                        <h2 style={{textAlign: 'center'}}>Contributer</h2>
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