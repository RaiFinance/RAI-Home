import React, {useEffect, useState, useRef} from 'react'
import { Layout, Menu, Row, Col, Button, List, Card, Avatar, Carousel } from 'antd';
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
import Alphabit from '../../assets/images/home/Alphabit.png'
import NGC from '../../assets/images/home/NGC.png'
import TheLeagueofTraders from '../../assets/images/home/TheLeagueofTraders.png'
import {ReactComponent as TwitterLogo} from '../../assets/images/home/svg/Twitter.svg'
import {ReactComponent as MediumLogo} from '../../assets/images/home/svg/Medium.svg'
import {ReactComponent as TelegramLogo} from '../../assets/images/home/svg/Telegram.svg'
import {ReactComponent as GithubLogo} from '../../assets/images/home/svg/Github.svg'
import {ReactComponent as KakaoLogo} from '../../assets/images/home/svg/Kakao.svg'
import {ReactComponent as WeChatLogo} from '../../assets/images/home/svg/WeChat.svg'
import {ReactComponent as WeiboLogo} from '../../assets/images/home/svg/Weibo.svg'
import './index.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 1200px) {
        padding: 0 130px;
    }
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
        padding: 260px 0 50px;
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
            padding: 260px 130px 100px;
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
        padding: 100px 130px;
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
        padding: 100px 0;
        @media (max-width: 1200px) {
            padding: 100px 130px;
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
    .product{
        position: relative;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: -20%;
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
        }
        .img{
            display: none;
            @media (max-width: 767px) {
                display: block;
            }
        }
    }
    .whitepaper{
        margin-top: 60px;
        @media (max-width: 767px) {
            margin-top: 20px;
        }
        .img{
            width: auto;
            height: 440px;
            @media (max-width: 767px) {
                width: 100%;
                height: auto;
            }
        }
    }
    .tokenDes{
        font-size: 14px;
        line-height: 24px;
        color: #79869F;
        display: block;
    }
`
const FourthContent = styled.div`
    background: rgba(255, 255, 255, 0.6);
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 50px 0;
        @media (max-width: 1200px) {
            padding: 100px 130px;
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

const FifthContent = styled.div`
    background: radial-gradient(50% 50% at 110% 20%, rgba(60, 23, 184, 0.3) 0%, rgba(170, 94, 255, 0) 100%), radial-gradient(50% 50% at 110% 80%, rgba(60, 23, 184, 0.3) 0%, rgba(170, 94, 255, 0) 100%);
    backdrop-filter: blur(10px);
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 50px 0;
        @media (max-width: 1200px) {
            padding: 100px 130px;
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
        {
          title: 'CMO, Sandy Liang',
          img: Team3,
          des: 'Operation Director at BitKan \nSenior Operation Manager at Ontology \nMA at Hong Kong Polytechnic University, Bilingual Corporate Communication'
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
                            <a href="/">IDO</a>
                            <a href="/">SWAP</a>
                            <a href="/">STS</a>
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
                                <Button type="primary"><a href="https://alpha.rai.finance/#/" target="_blank">Enter</a></Button>
                            </Col>
                            <Col md={12} sm={24}>
                                <img src={Image1} />
                            </Col>
                        </Row>
                    </div>
                </FirstContent>
                <SecondContent>
                    <div>
                        <h2 style={{textAlign: 'center'}}>What is RAI Finance?</h2>
                        <p style={{textAlign: 'center'}}>RAI Finance aims to become the epicenter of Web3.0 world. Based on Polkadot technology and ecosystem, RAI Finance is going to create a new decentralized finance(DeFi) service, realizing a polymerized connection of multipul areas like creation of blockchain assets, cross-chain trading and social function.</p>
                        <Row
                            gutter={16}
                            className="raiFinance"
                        >
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img src={CrossChain} />
                                <p>Cross Chain</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img src={SocialTrading} />
                                <p>Social Trading</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img src={UniqueAsset} />
                                <p>Unique  Asset</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img src={IDO} />
                                <p>IDO</p>
                            </Col>
                        </Row>
                    </div>
                </SecondContent> 
                <ThirdContent>
                    <div>
                        <Row>
                            <Col md={10} sm={24}>
                                <h2 className="defiTitle">Socialized Your DeFi Experience</h2>
                                <ul>
                                    <li>Share Investment Set</li>
                                    <li>Communicate with KOL</li>
                                    <li>Analyze Investment Data</li>
                                    <li>Invest with Professionals</li>
                                </ul>
                            </Col> 
                            <Col md={14} sm={24}>
                                <div className="defiCarousel">
                                    <Carousel autoplay dots={false} ref={carouselRef as any}>
                                        <div className="item">
                                            1
                                        </div>
                                        <div className="item">
                                            2
                                        </div>
                                        <div className="item">
                                            3
                                        </div>
                                    </Carousel>
                                    <button className="invertBtn" onClick={() => {goTo(0)}}>Invest</button>
                                    <button className="analyzeBtn" onClick={() => {goTo(1)}}>Analyze</button>
                                    <button className="communicateBtn" onClick={() => {goTo(2)}}>Communicate</button>
                                </div>
                            </Col>
                        </Row>
                        <h2 style={{textAlign: 'center', marginTop: '100px'}}>RAI Finance Product</h2>
                        <Row className="product">
                            <Col md={12} sm={24}>
                                <img className="img" src={Image3} />
                            </Col>
                            <Col md={12} sm={24}>
                                <h3>STS</h3>
                                <p>Social trading system, combine Trading and Social Others </p>
                                <h3>DEX</h3>
                                <p>Trade multi-chain asset in an decentralized way</p>
                                <h3>SWAP</h3>
                                <p>A quicker way to exchange your multi-chain asset</p>
                                <h3>IDO</h3>
                                <p>Initial DeFi Offering</p>
                                <h3>Others</h3>
                                <p> Provide a wider usecase range for web 3.0 finance</p>
                            </Col>
                        </Row>
                        <Row className="whitepaper">
                            <Col md={10} sm={24}>
                                <h2 style={{marginTop: '40px'}}>RAI Finance's Whitepaper</h2>
                                <Button type="primary"><a target="_blank" rel="noopener" href="/RAI-Finance.pdf" className="elementor-item">Read More</a></Button>
                                <h3>RAI Token&nbsp;&nbsp;<img style={{width: '32px'}} src={RAIToken} /></h3>
                                <span className="tokenDes">RAI, the native token for RAI Finance is an essential component of the protocol and employs many functions in the ecosystem.</span>
                                <ul className="compenyList">
                                    <li><img src={Bithumb}/></li>
                                    <li><img src={HuoBiGlobal}/></li>
                                    <li><img src={Dodo}/></li>
                                    <li><img src={PancakeSwap}/></li>
                                </ul>
                            </Col>
                            <Col md={14} sm={24}>
                                <img className="img" src={Image4} />
                            </Col>
                        </Row>
                    </div>
                </ThirdContent>
                <FourthContent>
                    <div>
                        <h2 style={{textAlign: 'center'}}>Team</h2>  
                        <p>The team consists of KR, CN and US members. Each of them has expertise in their local markets, and on average 3+ years’ experience in blockchain industry. </p>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 3,
                                lg: 3,
                                xl : 3,
                                xxl: 3
                            }}
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <Card 
                                    className="teamCard"
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
                </FourthContent>
                <FifthContent>
                    <div>
                        <h2 style={{textAlign: 'center'}}>Partners</h2>
                        <Row
                            gutter={16}
                            className="parteners"
                        >
                            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                <img src={Alphabit}/>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                <img src={NGC}/>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                <img src={TheLeagueofTraders}/>
                            </Col>
                        </Row>
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
                </FifthContent>
            </Content>     
        </Layout>
    )
}

export default Home;
