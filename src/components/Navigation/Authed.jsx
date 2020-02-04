import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import styled from 'styled-components'
import media from '../../styles/mediaQueries';
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
// import notification from "../../assets/images/Icons/icon-notification.svg";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import { search } from "react-icons-kit/fa/search";
// import notification from '../../assets/images/Icons/icon-notification.svg';
import ProfileImageDropdown from './ProfileImageDropdown';
import Notifications from './_notifications/Notifications';

const StyledInsightly = styled.div`

  h3 {
    font-size: 28px;
  }
 ${media.phablet`display: none;`}
`;

function Authed(props) {
  const toggleModal = () => {
    if (props.newPost.showModal) {
      // document.getElementById("root").style.filter = "blur(0px)";
      document.getElementById("editor-page").style.pointerEvents = "auto";
    } else {
      // document.getElementById("root").style.filter = "blur(4px)";
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

  console.log(handleSearchClick);

  return (
    <FixedContainer>
      <NavWrapper>
        <StandLogo>
          <img alt="insight logo" src={insight} />
        </StandLogo>
        <StyledInsightly>
          <h3>Insightly</h3>
          <div></div>
        </StyledInsightly>
        <Control>
          {location.pathname !== "/search" && location.pathname.split("/")[1] !== "article" && (
            <div style={{ color: "#A9A9A9" }} onClick={handleSearchClick}>
              <Icon icon={search} size={24} />
            </div>
          )}
          <div className="write-button">
            <Button label={props.buttonLabel ? props.buttonLabel : 'Write' } handleClick={props.buttonLabel ? toggleModal : handleClick} />
            {props.saveButton && (<Button label="Save" handleClick={props.handleSave} /> )}
          </div>
          <div
            className="notification"
            style={{ color: "#A9A9A9", paddingTop: "2px" }}
          >
            <Icon icon={bell} size={24} />
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