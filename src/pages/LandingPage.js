import React from 'react';
import '../fonts/style.css';

import styled from 'styled-components';

import lp from '../assets/images/lp-pic.png';
import demo from '../assets/images/demo.GIF';
import logo from '../assets/images/logo.png';
import ps from '../assets/images/ps.png';
import appstr from '../assets/images/appstr.png';

const LandingPage = () => {

    const Main = styled.div`
     
        height: 100%;
    `
    const Content = styled.div`
        margin: auto;
    `

    const Logo = styled.div`
        p {
            font-family: 'HK Grotesk Bold';
            color: #212C4F;
            font-weight: 800;
            font-size: 2rem;
            margin-left: 30px;
        }
    `
    const LogIn = styled.div`
        margin-right: 30px; 
        font-family: 'HK Grotesk Light';
        display: flex;
        
        .button {
            text-decoration: none
        }

        .button.get-started {
            background-color: #3672FB; 
            padding: 10px;
            color: #FFFFFF;
            border-radius: 5px;
            border: none;
            box-shadow: 0px 10px 20px;
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
        }

        .button.get-started:hover {
            background-color: #212C4F;
            color: #FFFFFF;
        }

        .button.login{
            color: #205284;
            margin: 15px 30px 0 0;
            text-decoration: none;
        }
    `

    const TopLp = styled.div`
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
    `

    const About = styled.div`
        width: 45%;
        margin: 140px 0 0 30px;
        color: #205284;

        h3 {
            font-size: 1.8rem;
            font-family: 'HK Grotesk SemiBold';
        }

        p {
            margin-top: 40px;
            font-family: 'HK Grotesk Light';
        }

        form div {
            margin-top: 60px;
        }

        .email {
            padding: 15px;
            background-color: #C6D0EB;
            width: 270px;
        }

        .get-started-2 {
            background-color: #3672FB; 
            padding: 15px;
            color: #FFFFFF;
            border-radius: 5px;
            width: 180px;
            border: none;
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
        }

        .get-started-2:hover {
            background-color: #212C4F;
            color: #FFFFFF;
        }
    `

    const LpImage = styled.div`
        margin: 120px 35px 0 0;
    `

    const MidContent = styled.div`
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: auto;
    `

    const Features = styled.div`
        background-color: #C6D0EB;
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;

        h3 {
            font-family: 'HK Grotesk SemiBold';
            color: #205284;
            padding: 20px 0;
            font-size: 2rem;
        }

        .feat {
            width: 22%;
        }

        p {
            font-family: 'HK Grotesk Light';
            padding-bottom: 30px;
        }
    `
    const Demo = styled.div`
        width: 80%;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        
        p {
            color: #205284;
            font-family: 'HK Grotesk Bold';
            font-size: 5rem;
        }
    `

    const Space = styled.div`
        background-color: #C6D0EB;
        height: 150px;
    `

    const Pitch = styled.div`
        color: #205284;
        display: flex;
        flex-direction: column;

        h3 {
            font-family: 'HK Grotesk Bold';
            font-size: 3rem;
            margin: 50px auto;
        }

        p {
            font-family: 'HK Grotesk Light';
            margin: auto;
        }

        .try {
            background-color: #3672FB; 
            padding: 10px;
            color: #FFFFFF;
            border-radius: 5px;
            width: 180px;
            margin: 50px auto;
            border: none;
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
        }

        .try:hover {
            background-color: #212C4F;
            color: #FFFFFF;
        }
    `

    const BottomMenu = styled.div`
        background-color: #212C4F;
        font-family: 'HK Grotesk Light';
        display: flex;
        padding: 60px 0;
        justify-content: space-around;

        .header {
            color: #686868;
        }

        .content li{
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            text-decoration: none;
            color: #FFFFFF;
        }
    `
    const Footer = styled.div`
        background-color: #123D63;
        font-family: 'HK Grotesk Light';
        padding: 50px 0;
        display: flex;
        justify-content: space-around;

        li {
            color: #FFFFFF;
            text-decoration: none;
        }

        img {
            margin: 0 20px;
        }
    `

    return (
        <Main>
            <Content>
                <TopLp>
                    <Logo>
                        <p>Insight</p>
                    </Logo>
                    <LogIn>
                        <ul className='button login'>
                            <li>Log In</li>
                        </ul>
                        <button className='button get-started'>Try for free</button>
                    </LogIn>
                </TopLp>

                <MidContent>
                    <About>
                        <h3>Write Good Articles Effortlessy</h3>
                        <p>Insight is a writing and publishing platform that allows readers to highlight text and react to paragraph blocks with emojis and for the authors to see emoji stats on their writings.</p>
                        <form>
                            <div>
                                <input value={null} type='email' className='email' placeholder='Enter your email address' />
                                <button className='get-started-2'>Try for free</button>
                            </div>
                        </form>
                    </About>

                    <LpImage>
                        <img src={lp} alt='landing-page' width='700px' height='600px' />
                    </LpImage>
                </MidContent>

                <Features>
                    <div className='feat'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className='feat'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className='feat'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </Features>

                <Demo>
                    <p>Watch Insight in action</p>
                    <img src={demo} alt='app demo' width='600px' />
                </Demo>

                <Space>
                    <p></p>
                </Space>

                <Pitch>
                    <h3>Get Better Work Done</h3>
                    <p>See why millions of people across 100 countries use Insight</p>
                    <button className='try'>Try for free</button>
                </Pitch>

                <BottomMenu>
                    <img src={logo} alt='logo' width='80px' height='80px' />
                    <div className='content'>
                        <p className='header'>Insight</p>
                        <ul>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>Premium</li>
                        </ul>
                    </div>
                    <div className='content'>
                        <p className='header'>About Us</p>
                        <ul>
                            <li>Company</li>
                            <li>Leadership</li>
                            <li>Customers</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className='content'>
                        <p className='header'>Solutions</p>
                        <ul>
                            <li>Open Source Editor</li>
                            <li>Emoji React</li>
                            <li>Voice to Text</li>
                        </ul>
                    </div>
                    <div className='content'>
                        <p className='header'>Resources</p>
                        <ul>
                            <li>Insight Guide</li>
                            <li>Forum</li>
                            <li>Support</li>
                            <li>Events</li>
                        </ul>
                    </div>
                </BottomMenu>

                <Footer>
                    <ul>
                        <li>Terms & Privacy</li>
                    </ul>
                    <div>
                        <img src={appstr} alt='apple store' />
                        <img src={ps} alt='google playstore' />
                    </div>
                </Footer>
            </Content>
        </Main>
    );
};

export default LandingPage;