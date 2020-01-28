import React, { useState } from 'react';
import { StyledProfileImageDropdown } from '../styles/General Styles/StyledProfileImageDropdown';
export default function Dropdown(props) {
    const [toggleOpen, setToggleOpen] = useState(false);

    function toggleDropdown() {
        setToggleOpen(!toggleOpen);
        var profileImage = document.getElementById('dropdown-content').addEventListener('click', function() {
            document.getElementById('dropdown-profile-content').classList.toggle('show');
            document.getElementById('dropdown-notifications-content').classList.remove('show');
            setToggleOpen(!toggleOpen)

            return profileImage;
        });
        var notifications = document.getElementById('dropdown-content-notifications').addEventListener('click', function() {
            document.getElementById('dropdown-notifications-content').classList.toggle('show');
            document.getElementById('dropdown-profile-content').classList.remove('show');
            setToggleOpen(!toggleOpen)
            return notifications;
        });
    };

    // function toggleDropdown(id) {
    //     var dropdowns = document.getElementsByClassName("dropdown-content");
    //     var i;
    //     for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if ( dropdowns[i] !== document.getElementById(`${id}`) ) {
    //             setToggleOpen(false)
    //             openDropdown.classList.remove('show');
    //         }
    //     }
    //     setToggleOpen(true);
    //     document.getElementById(id).classList.toggle("show");
    // }

    return (
        <>
            <StyledProfileImageDropdown toggleDropdown={toggleDropdown}>
               {props.children}         
            </StyledProfileImageDropdown>
        </>
    )

}