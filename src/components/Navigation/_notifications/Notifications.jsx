import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../NavigationDropdown';
export default function ProfileImageDropdown(props) {
    const [state, setState] = useState(false);

    function toggleDropdown() {
        setState(!state);
            document.getElementById('dropdown-notifications-content').classList.toggle('show');
    }

    return (
        <Dropdown>
            <span id="dropdown-content-notifications">
                <FontAwesomeIcon icon={faBell} onClick={toggleDropdown}/>
            </span>
             <div className="dropdown-content" id="dropdown-notifications-content">
                 <ul>
                     <li className="dropdown-user-bio">
                         <p>David Kuseh</p>
                         <p>@davidkuseh</p>
                     </li>
                     
                 </ul>
            </div>
        </Dropdown>
    )
}