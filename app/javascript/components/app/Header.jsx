import React from "react"
import PropTypes from "prop-types"

import { 
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography
} from "@mui/material";

import Logo from "../logos/Logo";
import LoginFormDialogue from "../dialogs/LoginFormDialogue";
import { data } from "jquery";

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }
  handleOpen(){
    this.setState({ open: true })
  }
  handleClose(){
    this.setState({ open: false })
  }
  handleSignOut(){
    fetch(this.props.sign_out_action)
  }

  render () {
    let button;
    if(this.props.signed_in){
      button = <form method="delete" action={this.props.sign_out_action} data-remote="true">
        <Button type="submit" color="inherit" onClick={this.handleSignOut}>Sign Out</Button>
      </form>
    }
    else{
      button = <Button color="inherit" onClick={this.handleOpen}>Sign In</Button>
    }

    return (
      <React.Fragment>

        <LoginFormDialogue 
          open={this.state.open} 
          handleClose={this.handleClose}
          sign_in_action={this.props.sign_in_action}
        />

        <AppBar sx={{position: "static"}}>
          <Container sx={{width: '100%', margin:"0"}} maxWidth={false}>
            <Toolbar disableGutters>

              <Box sx={{ flexGrow: 0}}>
                <Logo height="50px"/>
              </Box>

              <Box>
              <Typography
                  variant="h2"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1 }}
                  pl={1}
                >
                Fender
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 0, position: "absolute", right: "10px" }}>
              { button }
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </React.Fragment>
    );
  }
}

Header.propTypes = {

}

export default Header
