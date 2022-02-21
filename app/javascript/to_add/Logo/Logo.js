import logo from "../../fender_logo.png"


const logoStyle = {
  height: "50px"
}

function Logo() {
  return (
    <img
      src={logo}
      className="logo"
      alt="Fender Logo Icon"
      style={logoStyle}
    />
  );
}

export default Logo;