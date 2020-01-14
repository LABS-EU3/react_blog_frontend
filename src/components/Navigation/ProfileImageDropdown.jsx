import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledProfileImageDropdown } from '../styles/General Styles/StyledProfileImageDropdown';
import avatar from '../../assets/images/avatar.svg';
import { clearLocalStorage } from '../../utilities/authentication'

export default function ProfileImageDropdown(props) {
    function logout() {
        clearLocalStorage();
    }

    const [state, setState] = useState(false);

    function toggleDropdown() {
        setState(!state);
            document.getElementById('dropdown-content').classList.toggle('show');
    }

    return (
        <StyledProfileImageDropdown >
            <img className="dropbtn" src={avatar} alt="avatar" onClick={toggleDropdown} />
            <div className="dropdown-content" id="dropdown-content">
                <ul>
                    <li className="dropdown-user-bio">
                        <p>David Kuseh</p>
                        <p>@davidkuseh</p>
                    </li>
                    <li className="list-item-separator"></li>
                    <li className="dropdown-links">
                        <Link to="">New Insight</Link>
                        <Link to="">Insights</Link>
                        <Link to="">Stats</Link>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
        </StyledProfileImageDropdown>
    )
}