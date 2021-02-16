import React from "react";
import styled from "styled-components";

export default class ImageBase extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <StyledImage {...this.props}></StyledImage>;
  }
}

const StyledImage = styled.img({
  maxWidth: "100%",
  margin: "3px",
});
