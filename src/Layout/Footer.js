import React from "react";

class Footer extends React.Component {
  render() {
    return <div style={footerStyle} />;
  }
}

const footerStyle = {
  background: "rgba(245, 171, 53, .6)",
  width: "100vw",
  height: "15vh"
};

export default Footer;
