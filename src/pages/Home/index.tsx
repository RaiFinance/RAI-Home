import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Menu, Row, Col, Button, List, Card, Avatar, Carousel } from 'antd';
import { CSSTransition } from "react-transition-group";
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import Logo from '../../assets/images/logo-dark.png'
import Image1 from '../../assets/images/home/image1.png'
import Image11 from '../../assets/images/home/image1-1.png'
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
import IDO from '../../assets/images/home/IDO.png'
import CrossChainGIF from '../../assets/images/home/Cross-Chain.gif'
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
    margin: 0 auto;
    padding: 0 50px;
    @media (max-width: 767px) {
        padding: 0 20px;
    }
`

const FirstContent = styled.div`
    background: radial-gradient(50% 50% at 0 100%, rgba(60, 23, 184, 0.2) 0%, rgba(60, 23, 184, 0) 100%),
    radial-gradient(50% 50% at 90% 10%, rgba(170, 94, 255, 0.1) 0%, rgba(60, 23, 184, 0) 100%);
    backdrop-filter: blur(10px);
    margin-top: -100px;
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 260px 50px 50px;
        position: relative;
        overflow: hidden;
        &:before{
            content: '';
            position: absolute;
            top: 40px;
            left: 50%;
            width: 100%;
            height: 100%;
            background: url(${Image11}) no-repeat;
            background-size: 60%;
            background-position: center;
            transform: translateX(-50%);
        }
        @media (max-width: 992px) {
            &:before{
                display: none;
            }
        }
        @media (max-width: 1200px) {
            padding: 260px 50px 100px;
        }
        @media (max-width: 767px) {
            padding: 220px 20px 20px;
        }
    }
`

const SecondContent = styled.div`
    background: rgba(255, 255, 255, 0.6);
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 100px 50px;
        @media (max-width: 767px) {
            padding: 20px;
        }
        .ant-btn{
            margin: 0 auto;
            display: block;
        }
    }
`

const ThirdContent = styled.div`
    background: radial-gradient(50% 50% at 0 50%, rgba(158, 234, 233, 0.4) 0%, rgba(158, 234, 233, 0) 100%), radial-gradient(50% 50% at -20% 0, rgba(60, 23, 184, 0.2) 0%, rgba(60, 23, 184, 0) 100%);;
    backdrop-filter: blur(10px);
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 130px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 20px;
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
    background: #EDFDF7;
    margin-top: -30px;
    @media (max-width: 767px) {
        margin-top: -10px;
    }
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 50px;
        @media (max-width: 767px) {
            padding: 20px;
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
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 50px;
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    .whitepaper{
        @media (max-width: 767px) {
            text-align: center;
        }
        .img{
            width: auto;
            height: 280px;
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
    background: radial-gradient(50% 50% at 110% 20%, rgba(60, 23, 184, 0.3) 0%, rgba(170, 94, 255, 0) 100%), radial-gradient(50% 50% at 110% 80%, rgba(60, 23, 184, 0.3) 0%, rgba(170, 94, 255, 0) 100%);
    backdrop-filter: blur(10px);
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

`
const StyledLink = styled.a`
    display: inline-block;
    margin: 0 10px;
    svg{
        width: 32px;
        .cls-1{fill:#fff;}
        .cls-2{fill:#d8d8d8;}
        &:hover{
            .cls-1{fill:#fff;}
            .cls-2{fill:#3C17B8;}
        }

    }
`

const Copyright = styled.div`
    float: right;
`

const Home: React.FC = () =>  {

    const data = [
        {
          title: 'CEO, Kevin Lee',
          img: Team1,
          des: 'Research Analyst at Honestfund \nCo-founder of VIU \nBA at Konkuk University, Management Information System'
        },
        {
          title: 'CTO, Minkyu Cho',
          img: Team2,
          des: 'Co-founder & COO at DEXEOS \nCo-founder at League of Traders \nResearcher at Samsung Electronics \nBA at Seoul National University, Industrial Engineering'
        },
      ];
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
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
        if (scrollTop >= 60) {
            //@ts-ignore
            document.querySelector('.ant-layout-header').style.background = '#fff';
        } else {
            //@ts-ignore
            document.querySelector('.ant-layout-header').style.background = 'transparent';
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

    return (
        <Layout className="homePage">
            <Header>
                <HeaderContent className="header">
                    <img className="Logo" src={Logo} alt="logo" />
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a href="/">Home</a>
                            <a href="#Experience">Product</a>
                            <a target="_blank" rel="noopener" href="/RAI-Finance.pdf">Whitepaper</a>
                            <a target="_blank" href="https://rai-finance.notion.site/62225248bc054e1eb7ff14f8def9b17e?v=3ea69551a4a943169d4d04a8bcc8f838">Roadmap</a>
                            <a target="_blank" href="https://rai-finance.gitbook.io/rai-finance/">Wiki</a>
                            <Button type="primary"><a target="_blank" href="https://betapro.rai.finance">Launch Beta</a></Button>
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
                        <Row>
                            <Col md={12} sm={24}>
                                <h1>The Epicenter of Web3.0 World</h1>
                                <p>
                                RAI Finance aims to become the epicenter of the Web 3.0 world, through the issuance of digital assets, cross chain trading and its social trading platform.
                                </p>
                                <Button type="primary"><a href="https://betapro.rai.finance" target="_blank">Try Test Product</a></Button>
                            </Col>
                            <Col md={12} sm={24}>
                                <img src={Image1} />
                            </Col>
                        </Row>
                    </div>
                </FirstContent>
                <SecondContent>
                    <div>
                        <h2 id="Finance" style={{textAlign: 'center'}}>What is RAI Finance?</h2>
                        <p style={{textAlign: 'center'}}>RAI Finance aims to become the epicenter of Web3.0 world. Based on Polkadot technology and ecosystem, RAI Finance is going to create a new decentralized finance(DeFi) service, realizing a polymerized connection of multipul areas like creation of blockchain assets, cross-chain trading and social function.</p>
                        <Row
                            gutter={16}
                            className="raiFinance"
                        >
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img 
                                    id="gif-1" 
                                    src={CrossChain} 
                                    onMouseOver={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-1').src = CrossChainGIF
                                    }}
                                    onMouseOut={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-1').src = CrossChain
                                    }}
                                />
                                <p>Cross Chain</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img 
                                    id="gif-2" 
                                    src={SocialTrading} 
                                    onMouseOver={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-2').src = SocialTradingGIF
                                    }}
                                    onMouseOut={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-2').src = SocialTrading
                                    }}
                                />
                                <p>Social Trading</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img 
                                    id="gif-3" 
                                    src={UniqueAsset} 
                                    onMouseOver={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-3').src = UniqueAssetGIF
                                    }}
                                    onMouseOut={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-3').src = UniqueAsset
                                    }}
                                />
                                <p>Unique Asset</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img 
                                    id="gif-4" 
                                    src={IDO} 
                                    onMouseOver={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-4').src = IDOGIF
                                    }}
                                    onMouseOut={() => { 
                                        //@ts-ignore
                                        document.getElementById('gif-4').src = IDO
                                    }}
                                />
                                <p>IDO</p>
                            </Col>
                        </Row>
                    </div>
                </SecondContent> 
                <ThirdContent>
                    <div>
                        <Row>
                            <Col md={{span: 10}} sm={24} xs={24}>
                                <h2 id="Experience" className="defiTitle">Socialized Your DeFi Experience</h2>
                                <ul>
                                    <li>Share investment set</li>
                                    <li>Communicate with KOL</li>
                                    <li>Analyze investment data</li>
                                    <li>Invest with professionals</li>
                                </ul>
                            </Col> 
                            <Col md={{span: 12, offset: 2}} sm={24} xs={24}>
                                <div className="defiCarousel">
                                    <Carousel autoplay dots={false} ref={carouselRef as any}>
                                        <div className="item">
                                            <img src={Inverst}/>
                                        </div>
                                        <div className="item">
                                            <img src={Analyze}/>
                                        </div>
                                        <div className="item">
                                            <img src={Communicate}/>
                                        </div>
                                    </Carousel>
                                    <button className="invertBtn" onClick={() => {goTo(0)}}>Invest</button>
                                    <button className="analyzeBtn" onClick={() => {goTo(1)}}>Analyze</button>
                                    <button className="communicateBtn" onClick={() => {goTo(2)}}>Communicate</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </ThirdContent>
                <FourthContent>
                    <h2 id="Product" style={{textAlign: 'center', paddingTop: '50px'}}>RAI Finance Product</h2>
                    <Row className="product">
                        <Col md={12} sm={24}>
                        </Col>
                        <Col md={12} sm={24}>
                            <h3>STS</h3>
                            <p>Social trading system combines both trading and socializing</p>
                            <h3>DEX</h3>
                            <p>Trade multi-chain assets in an decentralized way</p>
                            <h3>SWAP</h3>
                            <p>The fastest way to swap-and-go your multi-chain assets</p>
                            <h3>IDO</h3>
                            <p>Access to high quality early stage projects via Initial DeFi Offering</p>
                            <h3>Others</h3>
                            <p> Provide a wider usecase range for web 3.0 finance</p>
                        </Col>
                    </Row>
                </FourthContent>
                <FifthContent>
                    <Row className="whitepaper">
                        <Col md={14} sm={24}>
                            <h2 id="Whitepaper">RAI Finance's Whitepaper</h2>
                            <Button type="primary"><a target="_blank" rel="noopener" href="/RAI-Finance.pdf" className="elementor-item">Read More</a></Button>
                            <h3>RAI Token&nbsp;&nbsp;<img style={{width: '32px'}} src={RAIToken} /></h3>
                            <span className="tokenDes">RAI, the native token for RAI Finance is an essential component of the protocol and employs many functions in the ecosystem.</span>
                            <ul className="compenyList">
                                <li><img src={Bithumb}/></li>
                                <li><img src={HuoBiGlobal}/></li>
                                <li><img src={Dodo}/></li>
                                <li><img src={PancakeSwap}/></li>
                                <li><img src={Bibox}/></li>
                                <li><img src={Bitwell}/></li>
                            </ul>
                        </Col>
                        <Col md={{span: 8, offset: 2}} sm={24} xs={24}>
                            <img className="img" src={Image4} />
                        </Col>
                    </Row>
                </FifthContent>
                <SixthContent>
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
                </SixthContent>
                <SeventhContent>
                    <div>
                        <h2 style={{textAlign: 'center'}}>Partners</h2>
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
                        </div>
                        <div
                            className="parteners2"
                        >
                            <div>
                                <img src={Avalanche}/>
                            </div>
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
                        <div style={{marginTop: '100px'}}>
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
                            <Copyright>
                            © 2021 RAI.Finance
                            </Copyright>  
                        </div>
                    </div>
                </SeventhContent>
            </Content>     
        </Layout>
    )
}

export default Home;
