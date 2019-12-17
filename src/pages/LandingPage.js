import React from 'react';
import '../fonts/style.css';

import styled from 'styled-components';

import lp from '../assets/images/lp-pic.png';
import demo from '../assets/images/demo.GIF';

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
        
        .button {
            text-decoration: none
        }

        .button.get-started{
            background-color: #3672FB; 
            padding: 10px;
            color: #FFFFFF;
            border-radius: 5px;
        }

        .button.login{
            color: #205284;
            margin-right: 30px;
        }
    `

    const TopLp = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
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
            color: #212C4F;
            font-family: 'HK Grotesk Bold';
            font-size: 5rem;
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
                        <a href='#' className='button login'>Log In</a>
                        <button href='#' className='button get-started'>Try for free</button>
                    </LogIn>
                </TopLp>

                <MidContent>
                    <About>
                        <h3>Write Good Articles Effortlessy</h3>
                        <p>Insight is a writing and publishing platform that allows readers to highlight text and react to paragraph blocks with emojis and for the authors to see emoji stats on their writings.</p>
                        <form>
                            <div>
                                <input value={null} type='email' className='email' placeholder='Enter your email address' />
                                <button href='#' className='get-started-2'>Try for free</button>
                            </div>
                        </form>
                    </About>

                    <LpImage>
                        <img src={lp} alt='landing-page' width='700px' height='600px' />
                    </LpImage>
                </MidContent>

                <Features>
                    <div className = 'feat'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className = 'feat'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className = 'feat'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </Features>

                <Demo>
                    <p>Watch Insight in action</p>
                    <img src={demo} alt='app demo' width='600px'/>
                </Demo>
            </Content>
        </Main>
    );
};

export default LandingPage;