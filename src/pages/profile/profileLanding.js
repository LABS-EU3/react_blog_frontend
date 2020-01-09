import React from 'react';
import ProfileFirstSection from './first_section/FirstSection';
import Authed from '../../components/Navigation/Authed';
import TabsDisplay from '../../components/Tabs/TabsDisplay';
export default function ProfileLandingPage() {
    return (
        <>
            <Authed />
            <ProfileFirstSection />  
            <TabsDisplay />          
        </>
    )
}