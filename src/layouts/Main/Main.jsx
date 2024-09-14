import React from "react";
import "./Main.scss";

function Main(props) {
  const { children } = props;
  return <main className="main">{children}</main>;
}

export default Main;
