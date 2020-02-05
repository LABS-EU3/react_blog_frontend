import React from 'react';
import avatar from '../../../assets/random-avatar.jpeg';
import styled from 'styled-components';

const Div = styled.div`
width:35%;
`;

const Section = styled.section`
 box-shadow: 0px 1px 3px 0px #aaa;
 display: block;
 max-width: 100%;
    margin: 0 auto;
`;

const Img = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
`;

export default function UserBio() {
    return (
        <Section>
            <Div className="avatar-div">
                <Img src={avatar} alt="The user avatar goes here" />
            </Div>
            <div className="other-info">
                <h6>Johnson Doe</h6>
                <div className="bio-info">
                    <p>This is where my User's bio info goes here and the User's bio info goes here</p>
                </div>
                <div className="follow-info">
                    <span>
                        <p>following</p>
                        <p>followers</p>
                    </span>
                </div>
                <button> Edit Profile </button>
            </div>
        </Section>
    )
}