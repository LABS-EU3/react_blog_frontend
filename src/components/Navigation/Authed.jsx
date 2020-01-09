import React from 'react'
import Button from '../Button';
import {
  NavWrapper, StandLogo,Control
} from './navigation.styles';
import insight from '../../assets/images/insight-stand.png'
import avatar from '../../assets/images/avatar.svg'
import notification from '../../assets/images/Icons/icon-notification.svg'
import { Link } from 'react-router-dom';
export default function Authed() {
  return (
    <NavWrapper>
      <StandLogo>
        <img alt="insight logo" src={insight}/>
      </StandLogo>
      <Control>
        <Link to="/create"><Button label="Write" /></Link>
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
