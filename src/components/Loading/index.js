import React from "react";
import OstMask from "../OstMask/index";
import "./style.less";
// import * as CSSModules from "react-css-modules";


// interface IProps {
//   isLoading?:boolean;
//   loadingText?:boolean;
// }
// interface IStates {
// }
// @CSSModules(styles)
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoading, loadingText } = this.props;
    let text = loadingText || "加载中…";
    return (
      <OstMask show={isLoading}>
        <div className="loading">
          <span className="loading_svg"></span>
          <span className="loading_text">{text}</span>
        </div>
      </OstMask>
    );
  }
}

