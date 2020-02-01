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
    <h3 className={className} onClick={handleClick}>
      {props.label}
    </h3>
  );
};

export default Tab;
