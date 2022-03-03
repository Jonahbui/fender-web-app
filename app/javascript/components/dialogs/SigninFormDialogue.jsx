import React from "react"
import PropTypes from "prop-types"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material';

class SigninFormDialogue extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePasswordInupt = this.handlePasswordInupt.bind(this)
  }

  handleEmailInput(event){
    this.setState({email: event.target.value})
  }
  handlePasswordInupt(event){
    this.setState({password: event.target.value})
  }
  render () {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose}>
        <DialogTitle>Sign In</DialogTitle>
        <form id="sign-in-form" action={this.props.sign_in_action} acceptCharset="UTF-8" data-remote="true" method="post" >
        
          <DialogContent>
            <DialogContentText>
              <Typography component="span" variant="inherit" sx={{color: "#d32f2f"}}>For administrative use.</Typography> Enter email and password.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="user[email]"
              id="sign-in-email"
              label="Email Address"
              autoComplete="email"
              type="email"
              fullWidth
              variant="standard"
              onChange={this.handleEmailInput}
            />
            <TextField
              margin="dense"
              name="user[password]"
              id="sign-in-password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={this.handlePasswordInupt}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose}>Cancel</Button>
            <Button component="button" type="submit">Submit</Button>
          </DialogActions>

        </form>

      </Dialog>

    );
  }
}

SigninFormDialogue.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  sign_in_action: PropTypes.string
}

export default SigninFormDialogue
