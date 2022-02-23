import React from "react"
import PropTypes from "prop-types"

import logo from  "../../../assets/images/fender_logo.png"

class Logo extends React.Component {
  render () {
    return (
      <React.Fragment>
        <img 
          src={logo}
          alt="Logo"
          style={ {height: this.props.height} }
        />
      </React.Fragment>
    );
  }
}

Logo.propTypes = {
  height: PropTypes.string
};
export default Logo
