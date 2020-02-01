import React from 'react';
import Tabs from './Tabs'
import DraftsTab from '../../pages/profile/profile_tabs/DraftsTab';
import InsightTab from '../../pages/profile/profile_tabs/InsightTab';
import ProfileReactionsTab from '../../pages/profile/profile_tabs/ProfileReactionsTab';
import TabD from '../../pages/profile/profile_tabs/insights/TabD'
export default function TabsDisplay() {
    return (
        <div>
            <Tabs>
                <InsightTab label="Insights">
                    <TabD />
                </InsightTab>
                <DraftsTab label="Drafts">
                    Drafts Tab Here
                </DraftsTab>
                <ProfileReactionsTab label="Reactions">
                    Profile ProfileReactionsTab Here
                </ProfileReactionsTab>
            </Tabs>
        </div>
    )
}