import React, { useState } from 'react';
import { StyledProfileImageDropdown } from '../styles/General Styles/StyledProfileImageDropdown';
export default function Dropdown(props) {
    const [toggleOpen, setToggleOpen] = useState(false);

    function toggleDropdown() {
        setToggleOpen(!toggleOpen);
        document.getElementById('dropdown-content').classList.toggle('show');
    };

    return (
        <>
            <StyledProfileImageDropdown>
                {/* <img src={props.src} alt={props.alt} className={props.className} onClick={toggleDropdown} />
                <div className={props.className} id={props.id}>
                    <ul className={props.className}>

                    </ul>
                </div> */}
                {this.props.children}
            </StyledProfileImageDropdown>
        </>
    )

}