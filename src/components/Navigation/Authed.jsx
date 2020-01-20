import React from 'react'
import Button from '../Buttons/Button';
import { useHistory } from "react-router-dom";
import {
  NavWrapper, StandLogo,Control
} from './navigation.styles';
import insight from '../../assets/images/insight-stand.png'
import notification from '../../assets/images/Icons/icon-notification.svg'
import { Link } from 'react-router-dom';
import ProfileImageDropdown from '../Navigation/ProfileImageDropdown';

export default function Authed(props) {

  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/create")
  }

  return (
    <NavWrapper>
      <StandLogo>
        <img alt="insight logo" src={insight}/>
      </StandLogo>
      <Control>
        <Button label="Write" handleClick={handleClick}/>
        <div className="notification">
          <img alt="notification" src={notification}/>
        </div>
        <div className="avatar">
          {/* <img alt="avatar" src={avatar}/> */}
          <ProfileImageDropdown />
        </div>
      </Control>
    </NavWrapper>
  )
}
