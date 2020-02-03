import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../NavigationDropdown';
import { StyledNotificationIcon, StyledNotificationDropdownContent } from '../../styles/StyledNotification';
import TinyAvatar from '../../../assets/random-avatar.jpeg'
import Pusher from 'pusher-js';
import { getNotifications} from '../../../redux-store/actions/get-notifications';
import { getToken } from '../../../utilities/authentication'
import { pusher, notifications_channel } from '../../../utilities/pusherConfiguration';

export default function ProfileImageDropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);

    // fetch the initial notifications
    useEffect(() => {
        getNotifications()
    }, [getNotifications]);


    notifications_channel.bind('new-notification', data => {
        setNotifications(notifications.concat(data.notification))
    }, this);


    function toggleDropdown() {
        setIsOpen(!isOpen);
            document.getElementById('dropdown-notifications-content').classList.toggle('show');
    }
   


    
    return (
        <Dropdown>
            <StyledNotificationIcon>
                <FontAwesomeIcon icon={faBell}  onClick={toggleDropdown}/>
            </StyledNotificationIcon>
             <StyledNotificationDropdownContent  className="dropdown-content" id="dropdown-notifications-content">
                 <ul>
                     {notifications.map(notification => (
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
                     ))}
                 </ul>
            </StyledNotificationDropdownContent>
        </Dropdown>
    )
}