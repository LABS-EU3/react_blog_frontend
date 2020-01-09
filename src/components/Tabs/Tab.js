import React from 'react';
// import { StyledTabItems, StyledTabListActive } from '../styles/tabs/tab.styles';

import './tabs.css'
export default function Tab(props) {
    function onClick() {
        const { label, onClick } = props;
        onClick(label)
    }

    console.log(props);

    const { activeTab, label } = props;
    // console.log(activeTab);

    // let className = 'tab-list-item';
    let className = 'tab-items';

    if (activeTab === label) {
        // className += ' tab-list-active';
        className += ' tab-list-active';
    }
    console.log(className);


    return (
        <li className={className} onClick={onClick}>
            {label}
        </li>
    )
}