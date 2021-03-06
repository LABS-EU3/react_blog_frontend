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
  getUsersToFollow,
  followUsers
} from "../redux-store/actions/onboarding-actions";

import onboard from '../assets/onboarding.png';

import userIcon from "../assets/images/Icons/user.png";

function Final(props) {
  const [stage, setStage] = useState(1);
  const [checkItems, setCheckeditems] = useState(new Map());
  const [follow, setFollow] = useState([]);
  const {
    tags,
    getTags,
    getUsersToFollow,
    declareInterest,
    usersToFollow,
    followUsers,
  } = props;
  let view;

  const handleChange = e => {
    const item = e.target.value;
    const isChecked = e.target.checked;
    setCheckeditems(checkItems => checkItems.set(item, isChecked));
  };

  const handleSubmit = () => {
    getUsersToFollow();
    let interests = [];
    // eslint-disable-next-line array-callback-return
    [...checkItems].map(interest => {
      if (interest[1] === true) {
        interests.push(interest[0]);
      }
    });

    declareInterest(interests).then(res => {
      setStage(2);
    });
  };

  const handleFollowClick = (userId) => {
    if (follow.includes(userId)) {
      setFollow(follow.filter(id => id !== userId));
    } else {
      setFollow(follow.concat(userId));
    }
  };

  const handleFollowSubmit = () => {
    const data = {
      follow,
    }
    followUsers(data).then(res => props.history.push("/feed"));
    setFollow([]);
  };

  useEffect(() => {
    getTags();
  }, [getTags]);

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
          {tags &&
            tags.map((tag, index) => {
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
            })}
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
      <div>
        <div className="intro">
          <h3>Users You May Be Interested In</h3>
        </div>
        <div className="users">
          {usersToFollow &&
            usersToFollow.map(user => {
              return (
                <div className="userCard" key={user.id}>
                  <img
                    className={follow.includes(user.id) ? 'clicked': ''}
                    src={user.avatarUrl || userIcon}
                    alt="#"
                    onClick={e => handleFollowClick(user.id)}
                  />
                  <p>{user.fullname}</p>
                </div>
              );
            })}
        </div>
        <div className="footer followSection">
          <button
            onClick={() => {
              props.history.push("/feed");
            }}
          >
            Skip
          </button>
          <button onClick={handleFollowSubmit}>Finish</button>
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <AnimeSection>
        <img src={onboard} alt="onboarding" />
      </AnimeSection>
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
  getUsersToFollow,
  followUsers
})(Final);
