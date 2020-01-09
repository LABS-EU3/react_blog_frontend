import React from 'react';
import UserBio from './UserBio';
import RecentActivity from './RecentActivity';
import {  
    StyledContainer,
    StyledRow,
    StyledColumn,
    StyledColumn5,
    StyledColumn6

} from '../../../components/styles/General Styles/Layout.styles';

export default function ProfileFirstSection() {
    return (
        <StyledContainer className="mt-3">
           <StyledRow>
                <StyledColumn className="d-r-flex">
                    <StyledColumn5>
                        <UserBio /> 
                    </StyledColumn5>
                    <StyledColumn6>
                        <RecentActivity /> 
                    </StyledColumn6>
                </StyledColumn>  
            </StyledRow>         
        </StyledContainer>
    )
}