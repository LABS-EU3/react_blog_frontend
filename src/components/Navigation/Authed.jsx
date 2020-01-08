import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '../Button';
import {
  NavWrapper, StandLogo,Control
} from './navigation.styles';
import insight from '../../assets/images/insight-stand.png'
import avatar from '../../assets/images/avatar.svg'
import notification from '../../assets/images/Icons/icon-notification.svg'

export default function Authed() {
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
        <Button label="Write" clickHandler={handleClick}/>
        <div className="notification">
          <img alt="notification" src={notification}/>
        </div>
        <div className="avatar">
          <img alt="avatar" src={avatar}/>
        </div>
      </Control>
    </NavWrapper>
  )
}
