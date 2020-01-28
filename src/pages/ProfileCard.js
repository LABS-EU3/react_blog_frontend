import React, { useState } from "react";
import styled from "styled-components";
import EditProfile from "../pages/EditProfile";
import UserArticleList from "../pages/UserArticles/UserArticleLIst";

const Section = styled.section`
   width: 100%;
  display: flex;
`;

const Div = styled.div`
  background-color: white;
  width: 25%;
  min-height: 100vh;
  text-align: center;
`;

const SecondDiv = styled.div`
  width: 70%;

  button {
    color: white;
    border: 1px solid #6f86ff;
    font-size: 13px;
    width: 29%;
    text-align: center;
    background-color: #6f86ff;
    :hover {
      background-color: #5b6dc0;
    }
    height: 35px;
    /* padding-top: 8px; */
    cursor: pointer;
  }

  h4 {
    font-size: 20px;
    color: #828282;
    margin-left: 40px;
  }
`;

const MiniDiv = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  justify-content: space-around;
  background-color: #3f51b6;
  border: 1px solid #3f51b6;
  height: 70px;
  margin: 40px;
  width: 100%;
`;

// const ThirdDiv = styled.div`
//   text-align: center;
//   color: #828282;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
//   margin-left: 40px;
//   margin-top: 40px;
//   background-color: white;

//   button {
//     margin-bottom: 10px;
//   }

//   img {
//     width: 240px;
//     margin: 30px;
//   }
// `;

// const P = styled.p`
//   font-size: 15px;
//   padding-bottom: 15px;
// `;

// const FourthDiv = styled.div`
//   color: #828282;
//   box-shadow: 0px 0px 0px 0px #aaa;
//   margin-left: 40px;
//   margin-top: 40px;
//   background-color: white;
//   img {
//     width: 450px;
//     margin: 30px;
//   }
//   p {
//     font-size: 16px;
//     color: #090909;
//     font-weight: bold;
//   }
// `;

// const FifthDiv = styled.div`
//   display: flex;
//   align-items: center;
//   box-shadow: 0px 0px 0px 0px #aaa;
//   margin-left: 40px;
//   background-color: white;
//   margin-top: 40px;
//   height: 65px;
//   width: 400px;
//   img {
//     height: 40px;
//     width: 40px;
//     border-radius: 50%;
//     margin: 30px;
//   }

//   p {
//     font-size: 17px;
//     color: #828282;
//     strong {
//       color: #5d6489;
//     }
//   }
// `;

function ProfileCard() {
    const [clicked, setClicked] = useState();

    const handleClick = e => {
        setClicked(e.target.id);
    };

    const getInsights = insightType => {
        if (insightType === "insights") {
        }
    };
    return (
        <Section>
            <Div>
                <EditProfile />
            </Div>

            <SecondDiv>
                <MiniDiv>
                    <button id="insights" onClick={handleClick}>INSIGHTS</button>
                    <button id="drafts" onClick={handleClick}>DRAFTS</button>
                    <button id="reactions" onClick={handleClick}>REACTIONS</button>
                </MiniDiv>

                {clicked === "reactions" ? (
                    <div>Reactions</div>
                ) : clicked === "drafts" ? (
                    <div>Drafts</div>
                ) : (
                            <UserArticleList />
                        )}

                {/* <h4> Your Insights </h4> */}
                {/* 
        <section className="new-section">
          <ThirdDiv>
            <img src={words} alt="#" />
            <P>Advice</P>
            <button>Delete</button>
          </ThirdDiv>
        </section> */}

                <section className="second-section">
                    {/* <FourthDiv>
            <img src={yoga} alt="#" />
          </FourthDiv> */}
                    {/* 
          <FifthDiv>
            <img src={johnson} alt="#" />
           
            <p>
              <strong>Damilolawumi</strong> <span>started following you</span>
            </p>
          </FifthDiv> */}
                </section>
            </SecondDiv>
        </Section>
    );
}

export default ProfileCard;
