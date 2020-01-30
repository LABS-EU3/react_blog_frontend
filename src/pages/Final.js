import React, { useState, useEffect } from "react";
import {
  Wrapper,
  AnimeSection,
  InteractionSection
} from "../utilities/styles/final-stage-styles";
import { connect } from "react-redux";
import { declareInterest } from "../redux-store/actions/auths";
import {
  getTags,
  getUsersToFollow
} from "../redux-store/actions/onboarding-actions";
import styled from "styled-components";
import damdam from "../assets/images/damdam.jpeg";
import dammy from "../assets/images/damdam.jpeg";
import UserCard from "./UserCard";
import {MainContainer} from "../utilities/styles/final-stage-styles";


const mockUsers = [{
  "id": 16,
  "fullname": "test1234",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": damdam,
  "mutualInterest": "Tech"
},
{
  "id": 17,
  "fullname": "User123",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": dammy,
  "mutualInterest": "Tech"
},
{
  "id": 19,
  "fullname": "Meg",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": damdam,
  "mutualInterest": ["Tech", "Cooking"]
},
{
  "id": 20,
  "fullname": "meg2",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": dammy,
  "mutualInterest": "Tech"
},
{
  "id": 21,
  "fullname": "Adam Whalley",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": damdam,
  "mutualInterest": "Tech"
},
{
  "id": 21,
  "fullname": "Adam Whalley",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": dammy,
  "mutualInterest": "Tech"
},
{
  "id": 21,
  "fullname": "Adam Whalley",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": damdam,
  "mutualInterest": "Tech"
},
{
  "id": 21,
  "fullname": "Adam Whalley",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": dammy,
  "mutualInterest": "Tech"
},
{
  "id": 21,
  "fullname": "Adam Whalley",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": damdam,
  "mutualInterest": "Tech"
},
{
  "id": 21,
  "fullname": "Adam Whalley",
  "bio": "a cheerful and devoted software developer with experience in node, javascript and react",
  "avatarUrl": dammy,
  "mutualInterest": "Tech"
}];


function Final(props) {
  const [stage, setStage] = useState(1);
  const [checkItems, setCheckeditems] = useState(new Map());
  const {
    tags,
    getTags,
    getUsersToFollow,
    declareInterest,
    usersToFollow
  } = props;
  let view;

  const handleChange = e => {
    const item = e.target.value;
    const isChecked = e.target.checked;
    console.log(e.target.checked);
    setCheckeditems(checkItems => checkItems.set(item, isChecked));
    console.log([...checkItems.keys()]);
  };

  const handleSubmit = () => {
    const interests = [...checkItems.keys()];
    declareInterest(interests).then(res => {
      setStage(2);
    });
  };

  useEffect(() => {
    getTags();
    // getUsersToFollow();
  }, []);

  if (stage === 1) {
    view = (
      <div className="final-container">
        <div className="intro">
          <h3>How would you describe your taste?</h3>
          <small>
            Tell us what topics are you interested in, and we'll find stuff
            that's right for you!
          </small>
        </div>
        <ul className="ks-cboxtags">
          {tags
            ? tags.map((tag, index) => {
              return (
                <li key={index}>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    id={`checkbox${index}`}
                    value={tag.name}
                  />
                  <label htmlFor={`checkbox${index}`}>{tag.name}</label>
                </li>
              );
            })
            : ""}
        </ul>
        <div className="footer">
          <button
            onClick={() => {
              setStage(2);
            }}
          >
            Skip
          </button>
          <button onClick={handleSubmit}>Next &nbsp;&nbsp; &rarr;</button>
        </div>
      </div>
    );
  } else if (stage === 2) {
    view = (
      <MainContainer>
        <div>
          <h3>Users You May Be Interested In</h3>
        </div>

        {mockUsers.map(user => {
          return (<div className="userCard">
           <UserCard user={user}/>

          </div>)
        })}
        <div className="footer">
          <button
            onClick={() => {
              setStage(2);
            }}
          >
            Skip
          </button>
          <button onClick={handleSubmit}>Next &nbsp;&nbsp; &rarr;</button>
        </div>
      </MainContainer>
    );
  }

  return (
    <Wrapper>
      <AnimeSection></AnimeSection>
      <InteractionSection>{view}</InteractionSection>
    </Wrapper>
  );
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    login_success: store.auth.interest_success,
    tags: store.onboarding.tags,
    usersToFollow: store.onboarding.users
  };
};

export default connect(mapStateToProps, {
  declareInterest,
  getTags,
  getUsersToFollow
})(Final);
