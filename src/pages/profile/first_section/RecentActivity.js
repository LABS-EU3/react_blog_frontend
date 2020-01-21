import React from 'react';
import { StyledRecentActivity } from "../../../components/styles/profile/recentActivities.styles";
export default function RecentActivity() {
    return (
        <StyledRecentActivity>
            <div className="card">
                <div className="title">
                    <p>Recent Activity</p>
                </div>
                <div className="body">
                    <div className="img-wrapper">
                        {/* <img alt /> */}
                    </div>
                    <div className="activity-wrapper">
                        <p><strong>DammyOluwa</strong> <span>started following you</span></p>
                        <p>Date here</p>
                    </div>
                </div>
            </div>
        </StyledRecentActivity>
    )
}