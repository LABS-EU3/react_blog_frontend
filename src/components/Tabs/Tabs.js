import React, { useState } from 'react';
import Tab from './Tab';
import { StyledTabsList } from '../styles/tabs/tabsList.styles';
export default function Tabs (props) {
    // create a state that takes in an object that grabs the label of the first child in the array
    const [tabState, setTabState] = useState({
        activeTab: props.children[0].props.label
    })

    // Set the activeTab to be the current tab
    function onClickTabItem(tab) {
        setTabState({
            activeTab: tab
        })
    }

    // Get the active tab from the state;
    const { activeTab } = tabState;
    const { children } = props;

    return (
        <div className="tabs">
            <StyledTabsList>
                {children.map((child) => {
                    const { label } = child.props;

                    return (
                        <Tab 
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                    )
                })}
            </StyledTabsList>
            <div className="tab-content">
                {children.map((child) => {
                    if(child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    )
}
