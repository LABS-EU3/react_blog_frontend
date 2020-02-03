import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import media from '../../styles/mediaQueries'
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
import ProfileImageDropdown from "../Navigation/ProfileImageDropdown";
import { search } from "react-icons-kit/fa/search";
import styled from "styled-components";

const StyledInsightly = styled.div`

  h3 {
    font-size: 28px;
  }
 ${media.phablet`display: none;`}
`;

export default function Authed(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
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
            <Button label="Create" handleClick={handleClick} />
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
