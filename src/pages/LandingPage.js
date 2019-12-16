import React from 'react';
import '../fonts/style.css';

import styled from 'styled-components';

import logoInsight from '../assets/images/insight-logo.png';
import lp from '../assets/images/lp-pic.png';

const LandingPage = () => {

    const Main = styled.div`
        background-color: #F0F3F5;
        height: 100%;
    `
    const Content = styled.div`
        width: 98%;
        margin: auto;
    `

    const Logo = styled.div`
        h3 {
            font-family: 'HK Grotesk Bold Legacy'
        }
    `
    const LogIn = styled.div`
        .button {
            text-decoration: none
        }

        .button.get-started{
            background-color: #3672FB; 
            padding: 10px;
        }
    `

    return (
        <Main>
            <Content>
                <Logo>
                    <img src={logoInsight} />
                    <h3>Insight</h3>
                </Logo>
                <LogIn>
                    <a href='#' className='button login'>Log In</a>
                    <a href='#' className='button get-started'>Get Started</a>
                </LogIn>

                <h3>Write Good Articles Effortlessy</h3>
                <p>Insight is a writing and publishing platform that allows readers to highlight text and react to paragraph blocks with emojis and for the authors to see emoji stats on their writings.</p>

                <form>
                    <div>
                        <input value={null} type='email' className='email' placeholder='Enter your email address' />
                        <a href='#' className='button-get-started-2'>Get Started</a>
                    </div>
                </form>

                <div>
                    <img src={lp} />
                </div>
            </Content>
        </Main>
    );
};

export default LandingPage;