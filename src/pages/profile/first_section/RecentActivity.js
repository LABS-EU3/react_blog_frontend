import React from 'react';
import { StyledRecentActivity } from "../../../components/styles/profile/recentActivities.styles";
import TinyAvatar from '../../../assets/random-avatar.jpeg'

export default function RecentActivity() {
    return (
        <StyledRecentActivity>
            <div className="card">
                <div className="title">
                    <p>Recent Activity</p>
                </div>
                <div className="body">
                    <div className="img-wrapper">
                        <img alt="avatar" src={TinyAvatar}/>
                    </div>
                    <div className="activity-wrapper">
                        <p><b>Damilolawumi</b> <span>started following you</span></p>
                        <p>Date here</p>
                    </div>
                </div>
            </div>
        </StyledRecentActivity>
    )
}