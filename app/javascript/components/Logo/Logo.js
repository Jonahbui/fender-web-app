import React from "react";
import logo from "../../../assets/images/fender_logo.png"

const logoStyle = {
  height: "50px"
}

export default function Logo() {
  return (
    <img
      src={logo}
      className="logo"
      alt="Fender Logo Icon"
      style={logoStyle}
    />
  );
}