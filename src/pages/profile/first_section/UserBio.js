import React from 'react';
import avatar from '../../../assets/random-avatar.jpeg'
import SecondaryButton from '../../../components/Buttons/SecondaryButton';
import { StyledUserBio } from '../../../components/styles/profile/StyledUserBio';
export default function UserBio() {
    return (
        <StyledUserBio>
            <div className="avatar-div">
                <img src={avatar} alt="The user avatar goes here"/>
            </div>
            <div className="other-info">
                <h6>Name Here</h6>
                <div className="bio-info">
                    <p>The User's bio info goes here and the User's bio info goes here</p>
                </div>
                <div className="follow-info">
                    <p>following</p>
                    <p>followers</p>
                </div>
                <SecondaryButton label="Edit Profile" />
            </div>
        </StyledUserBio>
    )
}