import React from 'react';
import UserBio from './UserBio';
import {  
    StyledContainer,
    StyledRow,
    StyledColumn,
    StyledColumn5

} from '../../../components/styles/General Styles/Layout.styles';

export default function ProfileFirstSection() {
    return (
        <StyledContainer className="mt-3">
           <StyledRow>
                <StyledColumn>
                    <StyledColumn5>
                        <UserBio /> 
                    </StyledColumn5>
                </StyledColumn>  
            </StyledRow>         
        </StyledContainer>
    )
}