import React from "react";
import dammy from "../assets/images/dammy.png";
import david from "../assets/images/david.jpg";
import megan from "../assets/images/megan.png";
import francis from "../assets/images/francis.png";
import uzoamaka from "../assets/images/uzoamaka.jpg";
import johnson from "../assets/images/johnson.jpg";
import styled from "styled-components";

const MainDiv = styled.div`
/* background-color:#04203D; */
/* background-image: linear-gradient(#F5F7FA, #FFFFFF );  */
width:100%;
`;

const Section = styled.section`
display:flex;
width: 100%;
flex-wrap: wrap;
text-align: center;
 /* background-image: linear-gradient(#8693AB, #BDD4E7 );  */

`;

const Img = styled.img`
width:280px;
border-radius: 50%;
`;

const Div = styled.div`
background: #fffefe;
width: 400px;
margin: auto;
/* box-shadow: 0px 1px 3px 0px #aaa; */
height: 425px;
padding-top: 10px;
margin-top: 20px;
`;

const P = styled.p`
font-size: 1.36rem;
text-align: center;
/* margin-left: 15px;
margin-top: 15px; */
margin:5px;
`;

const H6 = styled.h6`
font-size: 2.3em;
font-family: cursive;
margin-top: 10px;
`;

const H4 = styled.h4`
text-align: center;
font-size: 2.8rem;
margin-top: 15px;
/* color:white; */
`;

const Anchor = styled.a`
margin: 15px;
font-size: 13px;
`;

function AboutUs() {

    return (
        <MainDiv>
            <H4>Meet The Team</H4>
            {/* <p > Meet the amazing team that put the Insight web app all together. </p> */}
            <Section>
                <Div>
                    <Img src={dammy} alt="dammy.png" />
                    <H6>Damilola Olawumi</H6>
                    <P>From Nigeria, Damilola is a full stack web developer. I am committed to a lifelong learning, creating value and making positive impact to my community.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/Damilolawumi" target="_blank" rel="noopener noreferrer">Github </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/damilola-olawumi/" target="_blank" rel="noopener noreferrer">LinkedIn </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={david} alt="david.jpg" />
                    <H6>David Kuseh</H6>
                    <P>Ghanaian, full stack Web developer, avid fan of sports and video games. Striving to improve each day.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/davidkuseh" target="_blank" rel="noopener noreferrer">Github </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/david-kuseh" target="_blank" rel="noopener noreferrer">LinkedIn </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={megan} alt="megan.png" />
                    <H6>Megan Ennis</H6>
                    <P>Full Stack Web Development student from Dublin with an interest in UI effects, I enjoy bringing pages to life to create unique and dynamic user experiences.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/Megan0145" target="_blank" rel="noopener noreferrer">Github </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/megan-ennis-1391a8124/" target="_blank" rel="noopener noreferrer">LinkedIn </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={francis} alt="francis.png" />
                    <H6>Francis Bulus</H6>
                    <P>From Nigeria, Francis is a full stack web developer. I am committed to a lifelong learning, creating value and making positive impact to my community.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/fosterferret" target="_blank" rel="noopener noreferrer">Github </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/francis-bulus-b61098191/" target="_blank" rel="noopener noreferrer">LinkedIn </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={uzoamaka} alt="uzoamaka.jpg" />
                    <H6>Uzoamaka Anyanwu</H6>
                    <P>Uzoamaka Anyanwu is a fullstack developer, who is skilled in JavaScript, React, Vue, NodeJs, Postgres. I love building products and is dedicated to finding ways to create better user experiences.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/Uzoamaka126" target="_blank" rel="noopener noreferrer">Github </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/grace-anyanwu-ga/" target="_blank" rel="noopener noreferrer">LinkedIn </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={johnson} alt="johnson.jpg" />
                    <H6>Johnson Ogwuru</H6>
                    <P>Johnson is a software Engineer and a passionate problem solver. He loves to work with people.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/ogwurujohnson" target="_blank" rel="noopener noreferrer">Github </Anchor> 
                            <Anchor href="https://linkedin.com/in/ogwurujohnson" target="_blank" rel="noopener noreferrer">LinkedIn </Anchor>
                        </li>
                    </ul>
                </Div>
            </Section>

        </MainDiv>
    )
}

export default AboutUs;