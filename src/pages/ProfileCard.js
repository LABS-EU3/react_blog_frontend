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
  width: 89%;
`;

const DIV = styled.div`
display: flex;
justify-content: space-around;
font-size: 15px;
border-bottom: 1px solid darkgray;
width: 90%;
margin: auto;
a{
    cursor: pointer;
}
`;

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
                    <button id="insights" onClick={handleClick} className="fas fa-newspaper"> INSIGHTS</button>
                    <button id="drafts" onClick={handleClick} className="fas fa-feather-alt"> DRAFTS</button>
                    <button id="statistics" onClick={handleClick} className="fas fa-chart-line"> STATISTICS</button>
                </MiniDiv>

                {clicked === "statistics" ? ( 
                    
                    <DIV>

                        <a id="views" onClick={handleClick}>VIEWS</a>
                        <a id="user-reactions" onClick={handleClick}>USER REACTIONS</a>
                        <a id="reads" onClick={handleClick}>READS</a>

                    </DIV>
                ) : clicked === "views" ?(
                <div>views</div>
                ) : clicked === "user-reactions" ? (
                <div>user-reactions</div>
                ) : clicked === "reads" ? (
                <div>reads</div>
                ) : clicked === "drafts" ? (
                    <div>Drafts</div>
                ) : (
                            <UserArticleList />
                        )}


                <section className="second-section">

                </section>
            </SecondDiv>
        </Section>
    );
}

export default ProfileCard;
