import React from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";

export function Feed(props) {
  return <div>Feed</div>;
}

export default connect(state => state, {})(Feed);
