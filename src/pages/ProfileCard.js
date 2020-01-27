import React from 'react';
import johnson from '../assets/images/johnson.jpg'
import styled from 'styled-components';
import yoga from '../assets/images/yoga.jpg';
import fitness from '../assets/images/fitness.jpg';
import words from '../assets/images/words.jpg';
import EditProfile from '../pages/EditProfile';


const Section = styled.section`
/* background-color:#F9F9F9; */
width:100%;
display: flex;
`;

const Div = styled.div`
background-color:white;
width:25%;
height:800px;
text-align: center;
img{
    width:50%;
border-radius: 50%;
}
h3{
    font-size: 25px;
    margin-top: 34px;
}
p{
    font-size:15px;
    margin-top: 34px;
    margin-bottom: 40px;
}
`;

const Anchor = styled.a`
margin: 30px;
font-size: 20px;
padding: 20px;
   
  ` ;

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
    cursor: pointer;
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
box-shadow: 0px 8px 8px rgba(0,0,0,0.1);
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
box-shadow: 0px 5px 10px rgba(0,0,0,0.15);
margin-left: 40px;
margin-top: 40px;
background-color: white;

button{
    margin-bottom: 10px;

}

img{
    width: 240px;
    margin: 30px;
}`;

const P = styled.p`
    font-size: 15px;    
    padding-bottom: 15px;
`;

const FourthDiv = styled.div`
color: #828282;
box-shadow: 0px 0px 0px 0px #aaa;
margin-left: 40px;
margin-top: 40px;
background-color: white;
img{
    width: 450px;
    margin: 30px;
}
p{
    font-size: 16px;
    color: #090909;
    font-weight: bold;
}
`;

const FifthDiv = styled.div`
display: flex;
align-items: center;
box-shadow: 0px 0px 0px 0px #aaa;
margin-left: 40px;
background-color: white;
margin-top: 40px;
height: 65px;
width: 400px;
img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 30px;
}

p{
    font-size: 17px;
    color:#828282;
    strong{
        color:#5D6489;
    }
   }
   
`;


function ProfileCard() {

    return (
        <Section>
            <Div>
                {/* <img src={johnson} alt="The user avatar goes here" />
                <h3> John Doe</h3>
                <p> I am a Software developer, I love writing, reading and making an impact in my community</p>

                <Anchor>Followers</Anchor>
                <Anchor>Following</Anchor> */}
                <EditProfile/>

            </Div>

            <SecondDiv>
                <MiniDiv>

                    <a> INSIGHTS</a>
                    <a> DRAFTS </a>
                    <a> REACTIONS</a>

                </MiniDiv>

                <h4> Your Insights </h4>

                <section className="new-section">

                    <ThirdDiv>
                        <img src={words} alt="#" />
                        <P>Advise</P>
                        <button>Delete</button>
                    </ThirdDiv>

                </section>

                <section className="second-section">

                    <FourthDiv>
                        <img src={yoga} alt="#" />
                    </FourthDiv>

                    <FifthDiv>
                        <img src={johnson} alt="#" />
                        {/* <p>Recent Activity</p> */}
                        <p><strong>Damilolawumi</strong> <span>started following you</span></p>
                    </FifthDiv>

                </section>

            </SecondDiv>

        </Section>
    )
}

export default ProfileCard;