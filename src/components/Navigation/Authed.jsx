import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Buttons/Button";
import { NavWrapper, StandLogo, Control } from "./navigation.styles";
import insight from "../../assets/images/insight-stand.png";
import notification from "../../assets/images/Icons/icon-notification.svg";
import ProfileImageDropdown from "../Navigation/ProfileImageDropdown";
import { search } from "react-icons-kit/fa/search";
import { Icon } from "react-icons-kit";

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
    <NavWrapper>
      <StandLogo>
        <img alt="insight logo" src={insight} />
      </StandLogo>
      <Control>
        <div
          style={{ color: "grey", margin: "0.2rem 2rem 0 0 " }}
          onClick={handleSearchClick}
        >
          <Icon icon={search} size={24} />
        </div>
        <Button label="Write" handleClick={handleClick} />
        <div className="notification">
          <img alt="notification" src={notification} />
        </div>
        <div className="avatar">
          {/* <img alt="avatar" src={avatar}/> */}
          <ProfileImageDropdown />
        </div>
      </Control>
    </NavWrapper>
  );
}
