import React from "react";
import styled from "styled-components";
import Renderer from "../utilities/renderer";
import readTime from "../utilities/readTime";
import NavBar from "../components/Navigation/Authed";
import BackArrow from "../assets/images/arrow.svg";
import iot from "../assets/images/iot.svg";
import like from "../assets/images/like.svg";

//Simulating data from the backend for now because we don't have the feed page yet
const data = {
  id: 6,
  title: "Title here...",
  body:
    '[{"type":"header","data":{"text":"Title here...","level":1}},{"type":"header","data":{"text":"A timeline of Facebook\'s privacy issues — and its responses","level":1}},{"type":"paragraph","data":{"text":"Facebook’s recent crisis is just one of many privacy issues that company has had to deal with in its relatively short existence."}},{"type":"simpleImage","data":{"url":"https://media1.s-nbcnews.com/j/newscms/2018_13/2371716/180321-mark-zuckerberg-2017-ac-857p_742741e36feac3a4e63261ff36b50055.fit-760w.jpg","caption":"","withBorder":false,"withBackground":false,"stretched":false}},{"type":"paragraph","data":{"text":"Facebook CEO Mark Zuckerberg speaks at the F8 summit on March 25, 2015 in San Francisco, California.Josh Edelson / AFP - Getty Images fileMarch 24, 2018, 12:02 PM GMT+1&nbsp;/ Updated&nbsp;March 24, 2018, 12:02 PM GMT+1ByAlyssa Newcomb"}},{"type":"paragraph","data":{"text":"SAN FRANCISCO — Facebook’s recent crisis is just one of many privacy issues that company has had to deal with in its relatively short existence."}},{"type":"paragraph","data":{"text":"Barely two years old in 2006, the company faced user outrage when it introduced its News Feed. A year later it had to apologize for telling people what their friends had bought. Years after that, the Federal Trade Commission stepped in — and is now looking at the company again. Facebook has a history of running afoul of regulators and weathering user anger, all the while collecting record profits and racking up more than 2 billion users."}},{"type":"simpleImage","data":{"url":"https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201803/nn_mbr_facebook_quitters_180324_1920x1080.860;484;7;70;5.jpg","caption":"","withBorder":false,"withBackground":false,"stretched":false}},{"type":"simpleImage","data":{"url":"https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201803/nn_mbr_facebook_quitters_180324_1920x1080.760;428;7;70;5.jpg","caption":"","withBorder":false,"withBackground":false,"stretched":false}},{"type":"header","data":{"text":"Delete Facebook movement grows amid brewing backlash","level":2}},{"type":"paragraph","data":{"text":"MARCH 24, 201801:34"}},{"type":"paragraph","data":{"text":"Those privacy issues are now front and center. Facebook\'s loose handling of how its data was acquired by app developers has plunged the company into the biggest crisis of its 14-year existence. The revelation that a data analytics company used by Donald Trump’s presidential campaign was able to surreptitiously collect data on 50 million people through a seemingly innocuous quiz app has forced CEO Mark Zuckerberg to issue a public apology — and promise changes."}},{"type":"paragraph","data":{"text":"Taking a step back to look at Facebook’s pattern of privacy issues provides an important perspective on just how many times the company has faced serious criticism. What follows is a rundown of the biggest privacy issues Facebook has faced to date:"}},{"type":"paragraph","data":{"text":"When: September 2006"}},{"type":"paragraph","data":{"text":"What: Facebook debuts News Feed"}},{"type":"paragraph","data":{"text":"Facebook’s response: Tells users to relax"}},{"type":"paragraph","data":{"text":"Facebook was only two years old when it introduced News Feed on Sept. 5, 2006. The curated feed was intended as a central destination so users didn\'t have to browse through friends\' profiles to see what they had changed."}},{"type":"paragraph","data":{"text":"Facebook had&nbsp;<a href=\\"http://content.time.com/time/nation/article/0,8599,1532225,00.html\\">about 8 million users</a>&nbsp;at the time, and not all of them were happy about every move of their personal life being blasted into a daily feed for their friends."}},{"type":"paragraph","data":{"text":"An estimated 1 million users joined \\"Facebook News Feed protest groups,\\"<a href=\\"https://www.nbcnews.com/tech/social-media/can-you-even-remember-how-you-coped-facebook-s-news-n641676\\">&nbsp;arguing the feature was too intrusive</a>. But Facebook stayed the course."}},{"type":"paragraph","data":{"text":"“One of the things I\'m most proud of about Facebook is that we believe things can always be better, and we\'re willing to make big bets if we think it will help our community over the long term,” Zuckerberg said in a post reflecting on the 10th anniversary of News Feed."}},{"type":"paragraph","data":{"text":"The outrage died down, and News Feed became a major part of Facebook’s success."}},{"type":"paragraph","data":{"text":"When: December 2007"}},{"type":"paragraph","data":{"text":"What: Beacon, Facebook’s first big brush with advertising privacy issues"}},{"type":"paragraph","data":{"text":"Facebook’s response: Zuckerberg apologizes, gives users choice to opt out"}},{"type":"paragraph","data":{"text":"There was once a time when companies could track purchases by Facebook users and then notify their Facebook friends of what had been bought -- many times without any user consent."}},{"type":"simpleImage","data":{"url":"https://media2.s-nbcnews.com/j/newscms/2017_05/1890571/170203-mark-zuckerberg-mn-1515_af112a2a3912bc5d26ce2155e72fba44.fit-760w.jpg","caption":"","withBorder":false,"withBackground":false,"stretched":false}},{"type":"paragraph","data":{"text":"Facebook creator Mark Zuckerberg poses at Harvard University on May 14, 2004.Rick Friedman / Corbis via Getty Images"}},{"type":"paragraph","data":{"text":"In an apology on Dec. 6, 2007,&nbsp;<a href=\\"https://newsroom.fb.com/news/2007/12/announcement-facebook-users-can-now-opt-out-of-beacon-feature/\\">Zuckerberg explained his thought process</a>&nbsp;behind the program, called Beacon, and announced that users would be given the option to opt out of it."}},{"type":"paragraph","data":{"text":"“We were excited about Beacon because we believe a lot of information people want to share isn’t on Facebook, and if we found the right balance, Beacon would give people an easy and controlled way to share more of that information with their friends,” he said."}},{"type":"paragraph","data":{"text":"At the time, Facebook was also&nbsp;<a href=\\"http://www.nytimes.com/2007/11/07/technology/07adco.html\\">talking to the Federal Trade Commission</a>&nbsp;(FTC) about online privacy and advertising."}}]',
  authorId: 1,
  createdAt: "2020-01-13T10:22:48.526Z",
  updatedAt: "2020-01-13T10:22:48.526Z",
  tags: ["tech", "privacy"]
};

console.log(JSON.parse(data.body));

const Nav = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #ffffff;
`;

const MainPage = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 7.39%;
  bottom: -7.42%;

  background: #ffffff;

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

    color: #b7bbc0;
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

    color: #b7bbc0;
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

    color: #b7bbc0;
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

    color: #2fc2df;
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

    color: #2fc2df;
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
`;

const ReadArticle = () => {
  const content = JSON.parse(data.body);
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
          {data.tags ? data.tags.map(tag => <p>#{tag}</p>) : ""}
        </div>
        <p className="title">Internet of Things booming 15 Trillion Market</p>
        <p className="author">Johnson Ogwuru</p>
        <p className="readTimeLength">{`${readTime(data.body)} min read`}</p>
        <div className="articleImage">
          <img src={iot} alt="IoT" />
        </div>
        <div className="articleBody">
          {Renderer(content)}
        </div>
        <div className="like">
          <img src={like} alt="like icon" />
        </div>
      </MainPage>
    </>
  );
};

export default ReadArticle;
