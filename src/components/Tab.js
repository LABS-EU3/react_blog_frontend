import React from "react";

const Tab = props => {
  const { label, onClick, activeTab } = props;
  const handleClick = () => {
    onClick(label);
  };

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={handleClick}>
      {label}
    </li>
  );
};

export default Tab;
