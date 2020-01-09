import React from 'react';
import ProfileFirstSection from './first_section/FirstSection';
import Authed from '../../components/Navigation/Authed';
export default function ProfileLandingPage() {
    return (
        <>
            <Authed />
            <ProfileFirstSection />            
        </>
    )
}