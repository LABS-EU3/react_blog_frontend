import React from "react";
import theme from "../styles/theme";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


export default class extends React.Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color={theme.colors.purple}
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
