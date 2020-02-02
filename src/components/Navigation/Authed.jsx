import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Buttons/Button";
import { NavWrapper, StandLogo, Control, FixedContainer  } from "./navigation.styles";
import insight from "../../assets/images/insight-stand.png";
// import notification from "../../assets/images/Icons/icon-notification.svg";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import ProfileImageDropdown from "../Navigation/ProfileImageDropdown";
import { search } from "react-icons-kit/fa/search";
import styled from "styled-components";

const StyledInsightly = styled.div`
  h4 {
    position: absolute;
    width: 234px;
    height: 60px;
    left: 705px;
    top: 21px;
    font-size: 48px;
    line-height: 60px;
    color: #000000;
  }

  h3 {
    font-size: 28px;
  }
  // div {
  //   position: relative;
  //   width: 281px;
  //   height: 45px;
  //   left: 50%;
  //   top: 45px;
  //   background: #fef9e1;
  // }
`;

export default function Authed(props) {
  const history = useHistory();

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
        <div
          style={{ color: "#A9A9A9"}}
          onClick={handleSearchClick}
        >
          <Icon icon={search} size={24} />
        </div>
        <div className="write-button">
        <Button label="Create" handleClick={handleClick} />
        </div>
        <div className="notification" style={{ color: "#A9A9A9", paddingTop: "2px" }}>
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
