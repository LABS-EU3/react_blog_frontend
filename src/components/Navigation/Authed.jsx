import React, {useEffect} from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import Button from "../Buttons/Button";
import styled from "styled-components";
import media from "../../styles/mediaQueries";
import search from '../../assets/search.png'
import {
  publishPost,
  savePostAsDraft,
  handlePublishModal
} from "../../redux-store/actions/post-article-actions";

import { connect } from "react-redux";
import {
  NavWrapper,
  StandLogo,
  Control,
  FixedContainer
} from "./navigation.styles";
import insight from "../../assets/images/insight-stand.png";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import ProfileImageDropdown from "./ProfileImageDropdown";
import Notifications from "./_notifications/Notifications";
import { getUserBasic } from '../../redux-store/actions/user-profile-actions';


const StyledInsightly = styled.div`
  h3 {
    font-size: 28px;
  }
  ${media.phablet`display: none;`}
`;

function Authed(props) {

  useEffect(() => {
    async function fetchD() {
      const userData = localStorage.getItem('userBasic');
      const token = localStorage.getItem('token');
      console.log(userData);
      if (!userData && token) {
        const user = await getUserBasic();
        const stringObj = JSON.stringify(user)
        localStorage.setItem('userBasic', stringObj);
      }
    }
    fetchD(); 
  }, [])


  const toggleModal = () => {
    if (props.newPost.showModal) {
      document.getElementById("editor-page").style.pointerEvents = "auto";
    } else {
      document.getElementById("editor-page").style.pointerEvents = "none";
    }
    props.handlePublishModal();
  };

  const history = useHistory();
  const location = useLocation();

  const handleClick = event => {
    event.preventDefault();
    history.push("/create");
  };

  const handleSearchClick = e => {
    e.preventDefault();
    history.push("/search");
  };

  return (
    <FixedContainer>
      <NavWrapper>
        <StandLogo>
          <Link to="/feed">
            <img alt="insight logo" src={insight} />
          </Link>
        </StandLogo>
        <StyledInsightly>
          <h3>Insightly</h3>
          <div></div>
        </StyledInsightly>
        <Control>
          {location.pathname !== "/search" &&
            location.pathname.split("/")[1] !== "article" && (
              <div onClick={handleSearchClick} className="search">
                <img src={search} alt="search"/>
              </div>
            )}
          <div className="write-button">
            <Button
              label={props.buttonLabel ? props.buttonLabel : "Write"}
              handleClick={props.buttonLabel ? toggleModal : handleClick}
            />
            {props.saveButton && (
              <Button label="Save" handleClick={props.handleSave} secondary />
            )}
          </div>
          <div className="avatar">
            <ProfileImageDropdown />
          </div>
        </Control>
      </NavWrapper>
    </FixedContainer>
  );
}

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  };
};

export default connect(mapStateToProps, {
  handlePublishModal,
  publishPost,
  savePostAsDraft
})(Authed);
