import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../NavigationDropdown';
export default function ProfileImageDropdown(props) {
    console.log(props);

    const [state, setState] = useState(false);

    function toggleDropdown() {
        setState(!state);
            document.getElementById('dropdown-content').classList.toggle('show');
    }

    return (
        <Dropdown>
            <FontAwesomeIcon icon="coffee" onClick={props.toggleDropdown}/>
             <div className="dropdown-content" id="dropdown-content">
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