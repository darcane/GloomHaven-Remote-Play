import React from "react";
import ImageBase from "./imageBase.js";

const selectedCss = {
  border: "2px solid red", //this needs to be fixed
};

export default class GhCardBase extends ImageBase {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { selected: false };
  }

  render() {
    var { cardId, ...imageProps } = this.props;
    return this.state.selected ? (
      <ImageBase onClick={this.handleClick} {...selectedCss} {...imageProps} />
    ) : (
      <ImageBase onClick={this.handleClick} {...imageProps} />
    );
  }

  handleClick(e) {
    console.log(e);
    this.setState((prevState) => ({ selected: !prevState.selected }));
  }
}
