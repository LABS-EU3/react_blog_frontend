import React from "react";
import dammy from "../assets/images/dammy.png";
import david from "../assets/images/david.jpg";
import megan from "../assets/images/megan.png";
import francis from "../assets/images/francis.png";
import uzoamaka from "../assets/images/uzoamaka.jpg";
import johnson from "../assets/images/johnson.jpg";

function AboutUs() {

    return (
        <section>
            <p> Meet the amazing team that put the Insight web app all together. </p>
            <div>
                <h5>Damilola Olawumi</h5>
                <p>From Nigeria, Damilola is a full stack web developer. skilled in Javascript, React and Nodejs. I am committed to a lifelong learning, creating value and making positive impact to my community.</p>
                <img src={dammy} alt="dammy.png"/>
                <ul>
                    <li>
                        <a href="https://github.com/Damilolawumi" target="_blank" rel="noopener noreferrer">Github </a> <br/>
                        <a href="https://www.linkedin.com/in/damilola-olawumi/" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>David Kuseh</h5>
                <p>Ghanaian, full stack Web developer, avid fan of sports and video games. Striving to improve each day.</p>
                <img src={david} alt="david.jpg"/>
                <ul>
                    <li>
                        <a href="https://github.com/davidkuseh" target="_blank" rel="noopener noreferrer">Github </a> <br/>
                        <a href="https://www.linkedin.com/in/david-kuseh" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Megan Ennis</h5>
                <p>Full Stack Web Development student from Dublin with an interest in UI effects, I enjoy bringing pages to life to create unique and dynamic user experiences.</p>
                <img src={megan} alt="megan.png"/>
                <ul>
                    <li>
                        <a href="https://github.com/Megan0145" target="_blank" rel="noopener noreferrer">Github </a> <br/>
                        <a href="https://www.linkedin.com/in/megan-ennis-1391a8124/" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Francis Bulus</h5>
                <p>From Nigeria, Francis is a full stack web developer. skilled in Javascript, React and Nodejs. I am committed to a lifelong learning, creating value and making positive impact to my community.</p>
                <img src={francis} alt="francis.png"/>
                <ul>
                    <li>
                        <a href="https://github.com/fosterferret" target="_blank" rel="noopener noreferrer">Github </a> <br/>
                        <a href="https://www.linkedin.com/in/francis-bulus-b61098191/" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Uzoamaka Anyanwu</h5>
                <p>Uzoamaka Anyanwu is a fullstack developer, who is skilled in JavaScript, React, Vue, NodeJs, Postgres. I love building products and is dedicated to finding ways to create better user experiences.</p>
                <img src={uzoamaka} alt="uzoamaka.jpg"/>
                <ul>
                    <li>
                        <a href="https://github.com/Uzoamaka126" target="_blank" rel="noopener noreferrer">Github </a> <br/>
                        <a href="https://www.linkedin.com/in/grace-anyanwu-ga/" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Johnson Ogwuru</h5>
                <p>Johnson is a software Engineer, passionate problem solver, and technical writer. He loves taking code to production and the feeling of excitement he gets when he sees someone served by his innovations. He seeks out ways to be exposed to evolving global best practices, whet his appetite for information, and work with smart people who understand his desire to use technology to affect change for millions of people around the world. He has over 3 years of experience producing software across different sectors; such as education, e-commerce and aviation.</p>
                <img src={johnson} alt="johnson.jpg"/>
                <ul>
                    <li>
                        <a href="https://github.com/ogwurujohnson" target="_blank" rel="noopener noreferrer">Github </a> <br/>
                        <a href="https://linkedin.com/in/ogwurujohnson" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default AboutUs;