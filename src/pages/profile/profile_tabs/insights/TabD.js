import React from 'react';
import Button from '../../../../components/Buttons/Button';
import '../../../../components/Tabs/tabs.css';
import { StyledRow, StyledColumn, StyledContainer, StyledColumn12 } from '../../../../components/styles/General Styles/Layout.styles';
export default function TabD() {
    return (
        <div>
            <StyledContainer>
                <StyledRow>
                    <StyledColumn>
                        <StyledColumn12>
                            <div className="card">
                                <div className="title">
                                    <h5>Thr Art of Being an Amazing Techy</h5>
                                    <p>Dec 9 <span>4mins read</span></p>
                                </div>
                                <div className="body">
                                    <p>Lorem ipsium de...........</p>
                                </div>
                                <Button label="Go to Insight" />
                            </div>
                        </StyledColumn12>
                    </StyledColumn>
                </StyledRow>
            </StyledContainer>
        </div>
    )
}