import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../NavigationDropdown';
import { StyledNotificationIcon, StyledNotificationDropdownContent } from '../../styles/StyledNotification';
import TinyAvatar from '../../../assets/random-avatar.jpeg'

export default function ProfileImageDropdown(props) {
    const [state, setState] = useState(false);

    console.log(props);
    function toggleDropdown() {
        setState(!state);
            document.getElementById('dropdown-notifications-content').classList.toggle('show');
    }
    
    return (
        <Dropdown>
            <StyledNotificationIcon>
                <FontAwesomeIcon icon={faBell}  onClick={toggleDropdown}/>
            </StyledNotificationIcon>
             <StyledNotificationDropdownContent className="dropdown-content" id="dropdown-notifications-content">
                 <ul>
                    <li className="dropdown-user-bio card">
                        <div className="body">
                            <div className="img-wrapper">
                                <img alt="avatar" src={TinyAvatar}/>
                            </div>
                            <div className="activity-wrapper">
                                <p><strong>DammyOluwa</strong> <span>started following you</span></p>
                                <p>Date here</p>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-user-bio card">
                        <div className="body">
                            <div className="img-wrapper">
                                <img alt="avatar" src={TinyAvatar}/>
                            </div>
                            <div className="activity-wrapper">
                                <p><strong>DammyOluwa</strong> <span>started following you</span></p>
                                <p>Date here</p>
                            </div>
                        </div>
                    </li>
                 </ul>
            </StyledNotificationDropdownContent>
        </Dropdown>
    )
}