import React from 'react'
import Button from '../Buttons/Button';
import {
  NavWrapper, StandLogo,Control
} from './navigation.styles';
import insight from '../../assets/images/insight-stand.png'
import avatar from '../../assets/images/avatar.svg'
import notification from '../../assets/images/Icons/icon-notification.svg'
import { Link } from 'react-router-dom';
import { clearLocalStorage } from '../../utilities/authentication'
export default function Authed(props) {

  function logout() {
    clearLocalStorage();
  }
  
  let name = "btn"
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
        <Button label="Logout" handleClick={logout} className={name}/>
      </Control>
    </NavWrapper>
  )
}
