import React from 'react';

import './tabs.css'
export default function Tab(props) {
    function onClick() {
        const { label, onClick } = props;
        onClick(label)
    }

    const { activeTab, label } = props;

    let className = 'tab-items';

    if (activeTab === label) {
        className += ' tab-list-active';
    }

    return (
        <li className={className} onClick={onClick}>
            {label}
        </li>
    )
}