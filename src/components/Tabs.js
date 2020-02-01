import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../styles/theme";

import Tab from "./Tab";

const StyledOrderedList = styled.div`
  display: flex;
  width: 100%;
  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    font-family: ${theme.fonts.Oswald};
    text-transform: uppercase;
    cursor: pointer;
  }

  h3:nth-of-type(2) {
    padding-left: 3rem;
  }

  .tab-list-active {
    color: ${theme.colors.purple};
  }
`;

export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <StyledOrderedList>
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </StyledOrderedList>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
