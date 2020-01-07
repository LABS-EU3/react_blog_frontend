import React from "react";
import styled from "styled-components";

import NavBar from "../components/Navigation/Authed";
import BackArrow from "../assets/images/arrow.svg";
import iot from "../assets/images/iot.svg";
import like from "../assets/images/like.svg";

const Nav = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #FFFFFF;
`

const MainPage = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 7.39%;
    bottom: -7.42%;

    background: #FFFFFF;

    .back {
        position: absolute;
        width: 88px;
        height: 0px;
        left: 140px;
        top: 177px;

        box-sizing: border-box;
    }

    .categories p:nth-child(1) {
        position: absolute;
        width: 104px;
        height: 24px;
        left: 135px;
        top: 298px;

        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        display: flex;
        align-items: center;

        color: #B7BBC0;
    }

    .categories p:nth-child(2) {
        position: absolute;
        width: 129px;
        height: 24px;
        left: 247px;
        top: 298px;

        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        display: flex;
        align-items: center;

        color: #B7BBC0;
    }

    .categories p:nth-child(3) {
        position: absolute;
        width: 150px;
        height: 24px;
        left: 376px;
        top: 298px;

        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        display: flex;
        align-items: center;

        color: #B7BBC0;
    }

    .articleImage {
        position: absolute;
        width: 689px;
        height: 498px;
        left: 845px;
        top: 177px;

        border-radius: 3px;
    }

    .title {
        position: absolute;
        width: 546px;
        height: 174px;
        left: 135px;
        top: 350px;

        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 58px;
        display: flex;
        align-items: center;

        color: #040403;
        }

    .author {
        position: absolute;
        width: 129px;
        height: 48px;
        left: 135px;
        top: 553px;

        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;

        color: #2FC2DF;
    }

    .readTimeLength {
        position: absolute;
        width: 103px;
        height: 24px;
        left: 283px;
        top: 563px;

        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        display: flex;
        align-items: center;

        color: #2FC2DF;
    }

    .articleBody p:nth-child(1) {
        margin: 700px auto 0 auto;
        width: 84%;
        height: 210px;

        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 21px;
        line-height: 144.3%;

        display: flex;
        align-items: center;

        color: #333333;
        }

    .articleBody p:nth-child(2) {
        margin: 50px auto 30px auto;
        width: 84%;
        height: 210px;

        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 21px;
        line-height: 144.3%;

        display: flex;
        align-items: center;

        color: #333333;
        }    

    .like {
        margin: 0 0 40px 130px;
    }
    `

const ReadArticle = () => {

    return (
        <>
            <Nav className="navbar">
                <NavBar />
            </Nav>
            <MainPage>
                <div className="back">
                    <img src={BackArrow} alt="back" />
                </div>
                <div className="categories">
                    <p>#technology</p>
                    <p>#development</p>
                    <p>#programming</p>
                </div>
                <p className="title">Internet of Things booming 15 Trillion Market</p>
                <p className="author">Johnson Ogwuru</p>
                <p className="readTimeLength">4 mins read</p>
                <div className="articleImage">
                    <img src={iot} alt="IoT" />
                </div>
                <div className="articleBody">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
                <div className="like">
                    <img src={like} alt="like icon" />
                </div>
            </MainPage>
        </>
    );
};

export default ReadArticle;