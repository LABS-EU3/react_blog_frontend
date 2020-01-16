import React from "react";
import dammy from "../assets/images/dammy.png";
import david from "../assets/images/david.jpg";
import megan from "../assets/images/megan.png";
import francis from "../assets/images/francis.png";
import uzoamaka from "../assets/images/uzoamaka.jpg";
import johnson from "../assets/images/johnson.jpg";
import { MainDiv, Section, Img, Div, P, H6, H4, Anchor } from "../utilities/styles/AboutUs-styles";


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
                            <Anchor href="https://github.com/Damilolawumi"  className="fab fa-github-square" target="_blank" rel="noopener noreferrer"> </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/damilola-olawumi/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"> </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={david} alt="david.jpg" />
                    <H6>David Kuseh</H6>
                    <P>Ghanaian, full stack Web developer, avid fan of sports and video games. Striving to improve each day.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/davidkuseh"  className="fab fa-github-square" target="_blank" rel="noopener noreferrer"> </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/david-kuseh" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"> </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={megan} alt="megan.png" />
                    <H6>Megan Ennis</H6>
                    <P>Full Stack Web Development student from Dublin with an interest in UI effects, I enjoy bringing pages to life to create unique and dynamic user experiences.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/Megan0145"  className="fab fa-github-square" target="_blank" rel="noopener noreferrer"> </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/megan-ennis-1391a8124/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"> </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={francis} alt="francis.png" />
                    <H6>Francis Bulus</H6>
                    <P>From Nigeria, Francis is a full stack web developer. I am committed to a lifelong learning, creating value and making positive impact to my community.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/fosterferret"  className="fab fa-github-square" target="_blank" rel="noopener noreferrer"> </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/francis-bulus-b61098191/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"> </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={uzoamaka} alt="uzoamaka.jpg" />
                    <H6>Uzoamaka Anyanwu</H6>
                    <P>Uzoamaka Anyanwu is a fullstack developer, who is skilled in JavaScript, React, Vue, NodeJs, Postgres. I love building products and is dedicated to finding ways to create better user experiences.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/Uzoamaka126"  className="fab fa-github-square" target="_blank" rel="noopener noreferrer"> </Anchor> 
                            <Anchor href="https://www.linkedin.com/in/grace-anyanwu-ga/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"> </Anchor>
                        </li>
                    </ul>
                </Div>

                <Div>
                    <Img src={johnson} alt="johnson.jpg" />
                    <H6>Johnson Ogwuru</H6>
                    <P>Johnson is a software Engineer and a passionate problem solver. He loves to work with people.</P>
                    <ul>
                        <li>
                            <Anchor href="https://github.com/ogwurujohnson"  className="fab fa-github-square" target="_blank" rel="noopener noreferrer"> </Anchor> 
                            <Anchor href="https://linkedin.com/in/ogwurujohnson" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"> </Anchor>
                        </li>
                    </ul>
                </Div>
            </Section>

        </MainDiv>
    )
}

export default AboutUs;