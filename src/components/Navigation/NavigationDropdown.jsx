import React, { useState } from 'react';
import { StyledProfileImageDropdown } from '../styles/General Styles/StyledProfileImageDropdown';
export default function Dropdown(props) {
    const [toggleOpen, setToggleOpen] = useState(false);

    function toggleDropdown() {
        setToggleOpen(!toggleOpen);
        var profileImage = document.getElementById('dropdown-content-profile');
        var notifications = document.getElementById('dropdown-content-notifications');

            if(profileImage) {
                console.log(profileImage);
                document.getElementById('dropdown-content-profile').classList.toggle('show');
            } else if(notifications) {
                console.log(notifications)
                document.getElementById('dropdown-notifications-content').classList.toggle('show');
            } else {
                return;
            }
    };

    return (
        <>
            <StyledProfileImageDropdown >
               {props.children}         
            </StyledProfileImageDropdown>
        </>
    )

}