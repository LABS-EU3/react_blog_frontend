import React, {useEffect} from "react";
import {connect} from 'react-redux'
import { Wrapper, Details, StyledDetailsLeft, StyledDetailsRight, Body } from '../utilities/styles/read-styles';
import Renderer from "../utilities/renderer";
import readTime from "../utilities/readTime";
import NavBar from "../components/Navigation/Authed";
import BackArrow from "../assets/images/arrow.svg";
import like from "../assets/images/like-icon.svg";

import { getSingleArticle } from '../redux-store/actions/get-article-actions'
import { Link } from "react-router-dom";
import iot from "../assets/images/iot.svg";
import Highligter from "../components/Highlight";

//Simulating data from the backend for now because we don't have the feed page yet
const data = {
  id: 6,
  title: "A timeline of Facebook's privacy issues — and its responses",
  body:
    '[{"type":"paragraph","data":{"text":"Barely two years old in 2006, the company faced user outrage when it introduced its News Feed. A year later it had to apologize for telling people what their friends had bought. Years after that, the Federal Trade Commission stepped in — and is now looking at the company again. Facebook has a history of running afoul of regulators and weathering user anger, all the while collecting record profits and racking up more than 2 billion users."}},{"type":"paragraph","data":{"text":"Those privacy issues are now front and center. Facebook\'s loose handling of how its data was acquired by app developers has plunged the company into the biggest crisis of its 14-year existence. The revelation that a data analytics company used by Donald Trump’s presidential campaign was able to surreptitiously collect data on 50 million people through a seemingly innocuous quiz app has forced CEO Mark Zuckerberg to issue a public apology — and promise changes."}},{"type":"paragraph","data":{"text":"Taking a step back to look at Facebook’s pattern of privacy issues provides an important perspective on just how many times the company has faced serious criticism. What follows is a rundown of the biggest privacy issues Facebook has faced to date:"}},{"type":"paragraph","data":{"text":"Facebook was only two years old when it introduced News Feed on Sept. 5, 2006. The curated feed was intended as a central destination so users didn\'t have to browse through friends\' profiles to see what they had changed."}},{"type":"paragraph","data":{"text":"Facebook had&nbsp;<a href=\\"http://content.time.com/time/nation/article/0,8599,1532225,00.html\\">about 8 million users</a>&nbsp;at the time, and not all of them were happy about every move of their personal life being blasted into a daily feed for their friends."}},{"type":"paragraph","data":{"text":"An estimated 1 million users joined \\"Facebook News Feed protest groups,\\"<a href=\\"https://www.nbcnews.com/tech/social-media/can-you-even-remember-how-you-coped-facebook-s-news-n641676\\">&nbsp;arguing the feature was too intrusive</a>. But Facebook stayed the course."}},{"type":"paragraph","data":{"text":"“One of the things I\'m most proud of about Facebook is that we believe things can always be better, and we\'re willing to make big bets if we think it will help our community over the long term,” Zuckerberg said in a post reflecting on the 10th anniversary of News Feed."}},{"type":"paragraph","data":{"text":"What: Beacon, Facebook’s first big brush with advertising privacy issues"}},{"type":"paragraph","data":{"text":"Facebook’s response: Zuckerberg apologizes, gives users choice to opt out"}},{"type":"paragraph","data":{"text":"There was once a time when companies could track purchases by Facebook users and then notify their Facebook friends of what had been bought -- many times without any user consent."}},{"type":"simpleImage","data":{"url":"https://media2.s-nbcnews.com/j/newscms/2017_05/1890571/170203-mark-zuckerberg-mn-1515_af112a2a3912bc5d26ce2155e72fba44.fit-760w.jpg","caption":"Mark Zuckerberg at Havard","withBorder":false,"withBackground":false,"stretched":false}},{"type":"paragraph","data":{"text":"Facebook creator Mark Zuckerberg poses at Harvard University on May 14, 2004.Rick Friedman / Corbis via Getty Images"}},{"type":"paragraph","data":{"text":"In an apology on Dec. 6, 2007,&nbsp;<a href=\\"https://newsroom.fb.com/news/2007/12/announcement-facebook-users-can-now-opt-out-of-beacon-feature/\\">Zuckerberg explained his thought process</a>&nbsp;behind the program, called Beacon, and announced that users would be given the option to opt out of it."}},{"type":"paragraph","data":{"text":"“We were excited about Beacon because we believe a lot of information people want to share isn’t on Facebook, and if we found the right balance, Beacon would give people an easy and controlled way to share more of that information with their friends,” he said."}},{"type":"paragraph","data":{"text":"At the time, Facebook was also&nbsp;<a href=\\"http://www.nytimes.com/2007/11/07/technology/07adco.html\\">talking to the Federal Trade Commission</a>&nbsp;(FTC) about online privacy and advertising."}}]',
  authorId: 1,
  authorName: "Johnson Ogwuru",
  createdAt: "2020-01-13T10:22:48.526Z",
  updatedAt: "2020-01-13T10:22:48.526Z",
  tags: ["tech", "privacy", "facebook"]
};

console.log(JSON.parse(data.body));



const ReadArticle = (props) => {
  const { getSingleArticle, singleArticle, location } = props;
  useEffect(() => {
    const getArticle = () => {
      const params = location.pathname; 
      const articleId = params.split('/');
      getSingleArticle(articleId[2])
    }
    getArticle();
  }, [getSingleArticle, location.pathname])

  const articleBody = singleArticle.body ? singleArticle.body : '[]';
  const content = JSON.parse(articleBody);
  return (
    <>
      <NavBar />
      <Wrapper>
        <Details>
          <StyledDetailsLeft>
            <div className="back">
              <Link to="/feed"><img src={BackArrow} alt="back" /></Link>
            </div>
            <div className="tags">
              {singleArticle.tags
                ? singleArticle.tags.map((tag, index) => <p key={tag.id}>#{tag.name}</p>)
                : ""}
            </div>
            <h2 className="title">{singleArticle.title}</h2>
            
              <div className="bottom">
              <p className="author">{singleArticle.authorName}</p>
              {singleArticle.body && (
                  <p className="readTimeLength">{`${readTime(
                  singleArticle.body
                )} min read`}</p>
              )}
              </div>
          </StyledDetailsLeft>
          <StyledDetailsRight>
            <img src={singleArticle.coverImageUrl} alt="IoT" />
          </StyledDetailsRight>
        </Details>
        <Highligter>
          <Body>{Renderer(content)}</Body>
        </Highligter>
        <div className="like">
          <img src={like} alt="like icon" />
          <p>22</p>
        </div>
      </Wrapper>
    </>
  );
};

const mapStateToProps = store => {
  return {
    singleArticle: store.articles.singleArticle
  }
}

export default connect(mapStateToProps,{getSingleArticle})(ReadArticle);
