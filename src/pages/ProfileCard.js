import React from 'react';
import johnson from '../assets/images/johnson.jpg'
import styled from 'styled-components';
import yoga from '../assets/images/yoga.jpg';
import fitness from '../assets/images/fitness.jpg';
import words from '../assets/images/words.jpg';


const Section = styled.section`
background-color:#F9F9F9;
width:100%;
display: flex;
`;

const Div = styled.div`
background-color:white;
width:25%;
height:100vh;
text-align: center;
`;

const Img = styled.img`
width:50%;
border-radius: 50%;
`;

const SecondDiv = styled.div`
width:70%;

a{
    color: white;
    border: 1px solid #6F86FF;
    font-size: 13px;
    width: 29%;
    text-align: center;
    background-color: #6F86FF;
    :hover{
        background-color:#5B6DC0;
    }
    height: 35px;
    padding-top: 8px;
}

h4{
    font-size: 20px;
    color: #828282;
    margin-left: 40px;
}
`;

const MiniDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: #3F51B6;
border: 1px solid #3F51B6;
height: 70px;
margin: 40px;
width: 100%;
`;


const ThirdDiv = styled.div`
text-align:center;
color: #828282;
box-shadow: 0px 0px 0px 0px #aaa;
margin-left: 40px;
margin-top: 40px;
background-color: white;

img{
    width: 240px;
    margin: 30px;}
    `;

const P = styled.p`
    font-size: 15px;    
    padding-bottom: 15px;
`;

function ProfileCard() {

    return (
        <Section>
            <Div>
                <Img src={johnson} alt="The user avatar goes here" />
                <h3> John Doe</h3>
                <p>and also here some info goes</p>
            </Div>

            <SecondDiv>
                <MiniDiv>

                    <a> INSIGHTS</a>
                    <a> TABS </a>
                    <a> REACTIONS</a>

                </MiniDiv>

                <h4> Articles you might be interested in </h4>

                <section className="new-section">

                    <ThirdDiv>
                        <img src={words} alt="#" />
                        <P>Advise</P>
                    </ThirdDiv>

                    <ThirdDiv>
                        <img src={yoga} alt="#" />
                        <P>Yoga</P>
                    </ThirdDiv>

                    <ThirdDiv>
                        <img src={fitness} alt="#" />
                        <P>Fitness</P>
                    </ThirdDiv>

                </section>

            </SecondDiv>

        </Section>
    )
}

export default ProfileCard;