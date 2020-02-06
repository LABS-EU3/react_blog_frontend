import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clearLocalStorage } from '../../utilities/authentication'
import Dropdown from './NavigationDropdown';
export default function ProfileImageDropdown(props) {
    const local = localStorage.getItem('userBasic');
    const user = local ? JSON.parse(local): {};
    const avatar = user && user.data ? user.data.avatarUrl : 'https://getinsightly.s3.us-west-2.amazonaws.com/man5-512.png';
    const name = user && user.data ? user.data.fullname : 'John Doe';

    function logout() {
        clearLocalStorage();
    }

    const [state, setState] = useState(false);

    function toggleDropdown() {
        setState(!state);
            document.getElementById('dropdown-profile-content').classList.toggle('show');
    }

    return (
        <Dropdown>
            <img  className="dropbtn" src={avatar} alt="avatar" onClick={toggleDropdown} />
             <div className="dropdown-content" id="dropdown-profile-content">
                 <ul>
                     <li className="dropdown-user-bio">
                         <p>{name}</p>
                     </li>
                     <li className="list-item-separator"></li>
                     <li className="dropdown-links">
                         <Link to="/profile">Profile</Link>
                         <Link to="/create">New Insight</Link>
                         <Link to="/feed">Insights</Link>
                         <button onClick={logout}>Logout</button>
                     </li>
                 </ul></div>
        </Dropdown>
    )
}