import React, {useEffect, useState} from 'react'
import { Layout, Menu, Row, Col, Button, List, Card } from 'antd';
import { CSSTransition } from "react-transition-group";
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import Logo from '../../assets/images/logo-dark.png'
import Image1 from '../../assets/images/home/image1.png'
import Image2 from '../../assets/images/home/image2.png'
import Image3 from '../../assets/images/home/image3.png'
import Image4 from '../../assets/images/home/image4.png'
import RAIToken from '../../assets/images/home/RAIToken.png'
import Bithumb from '../../assets/images/home/Bithumb.png'
import HuoBiGlobal from '../../assets/images/home/HuoBiGlobal.png'
import ChainSwap from '../../assets/images/home/ChainSwap.png'
import PancakeSwap from '../../assets/images/home/PancakeSwap.png'
import {ReactComponent as TwitterLogo} from '../../assets/svg/twitter.svg'
import {ReactComponent as MediumLogo} from '../../assets/svg/medium.svg'
import {ReactComponent as TelegramLogo} from '../../assets/svg/telegram.svg'
import {ReactComponent as GithubLogo} from '../../assets/svg/github.svg'
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
        padding-top: 260px;
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
    img{
        width: 100%;
    }
    .tokenDes{
        font-size: 14px;
        line-height: 24px;
        color: #3C17B8;
        margin-left: 44px;
        display: block;
    }
    .ant-row{
        margin-top: 50px;
    }
`
const FourthContent = styled.div`
    background: rgba(255, 255, 255, 0.6);
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
    .ant-card-cover{
        img{
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin: 40px auto;
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
        padding: 100px 0;
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
    width: 32px;
    height: 32px;
    line-height: 32px;
    background: #DADADA;
    border-radius: 50%;
    padding: 5px;
    margin: 0 10px;
`

const Footer = styled.div`
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 30px 0;
        @media (max-width: 1200px) {
            padding: 30px 130px;
        }
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
`
const Copyright = styled.div`
    float: right;
`

const Home: React.FC = () =>  {

    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
      ];
    const style = { background: '#C4C4C4', padding: '20px 0' };
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader, false);
        return () => {
          window.removeEventListener('scroll', scrollHeader, false);
        }
    }, [])

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
                        <a href="/">Articles</a>
                        <a href="/">About</a>
                        <Button type="primary">Button</Button>
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
                                <Button type="primary">Enter</Button>
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
                        <p>RAI Finance aims to become the epicenter of Web3.0 world. Based on Polkadot technology and ecosystem, RAI Finance is going to create a new decentralized finance(DeFi) service, realizing a polymerized connection of multipul areas like creation of blockchain assets, cross-chain trading and social function.</p>
                        <Button type="primary">Learn More</Button>
                    </div>
                </SecondContent> 
                <ThirdContent>
                    <div>
                        <Row>
                            <Col md={14} sm={24}>
                                <h2>Socialized Your DeFi Experience</h2>
                                <ul>
                                    <li>Share Investment Set</li>
                                    <li>Communicate with KOL</li>
                                    <li>Analyze Investment Data</li>
                                    <li>Invest with Professionals</li>
                                </ul>
                            </Col>
                            <Col md={10} sm={24}>
                                <img src={Image2} />
                            </Col>
                        </Row>
                        <h2 style={{textAlign: 'center'}}>RAI Finance Product</h2>
                        <Row>
                            <Col md={10} sm={24}>
                                <img src={Image3} />
                            </Col>
                            <Col md={14} sm={24}>
                                <h3>DEX</h3>
                                <p>Trade multi-chain asset in an decentralized way</p>
                                <h3>SWAP</h3>
                                <p>A quicker way to exchange your multi-chain asset</p>
                                <h3>IDO</h3>
                                <p>Initial DeFi Offering</p>
                                <h3>STS</h3>
                                <p>Social trading system, combine Trading and Social Others </p>
                                <h3>Others</h3>
                                <p> Provide a wider usecase range for web 3.0 finance</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10} sm={24}>
                                <h2>RAI Finance's White Pape</h2>
                                <Button type="primary">Read More</Button>
                                <h3><img style={{width: '32px'}} src={RAIToken} />&nbsp;&nbsp;RAI Token </h3>
                                <span className="tokenDes">RAI, the native token for RAI Finance is an essential component of the protocol and employs many functions in the ecosystem.</span>
                                <ul className="compenyList">
                                    <li><img src={Bithumb}/></li>
                                    <li><img src={HuoBiGlobal}/></li>
                                    <li><img src={ChainSwap}/></li>
                                    <li><img src={PancakeSwap}/></li>
                                </ul>
                            </Col>
                            <Col md={14} sm={24}>
                                <img src={Image4} />
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
                                    cover={
                                        <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                >
                                    <h2 style={{textAlign: 'center'}}>Joana Leite</h2>
                                    Card content
                                </Card>
                            </List.Item>
                            )}
                        />
                    </div>
                </FourthContent>
                <FifthContent>
                    <div>
                        <h2>Partners</h2>
                        <Row
                            gutter={16}
                        >
                            <Col className="gutter-row" xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div style={style}></div>
                            </Col>
                            <Col className="gutter-row" xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div style={style}></div>
                            </Col>
                            <Col className="gutter-row" xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div style={style}></div>
                            </Col>
                            <Col className="gutter-row" xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div style={style}></div>
                            </Col>
                        </Row>
                        <div style={{marginTop: '30px'}}>
                            <StyledLink 
                                target='_blank'
                                href="https://twitter.com/RaiFinance">
                                <TwitterLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink 
                                target='_blank'
                                href="https://github.com/RaiFinance">
                                    <GithubLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink 
                                target='_blank'
                                href="https://medium.com/rai-finance">
                                    <MediumLogo fill="#fff"/>
                            </StyledLink>
                            <StyledLink 
                                target='_blank'
                                href="https://t.me/RaiFinance">
                                <TelegramLogo fill="#fff"/>
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
