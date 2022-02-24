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

class LoginFormDialogue extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePasswordInupt = this.handlePasswordInupt.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleEmailInput(event){
    this.setState({email: event.target.value})
  }
  handlePasswordInupt(event){
    this.setState({password: event.target.value})
  }
  handleSubmission(event){
    console.log(this.state.email);
    console.log(this.state.password);
  }
  render () {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose}>
        <DialogTitle>Login</DialogTitle>
        <form id="login-form" action={this.props.sign_in_action} data-remote="true" method="post" onSubmit={this.handleSubmission}>
        
          <DialogContent>
            <DialogContentText>
              <Typography component="span" variant="inherit" sx={{color: "#d32f2f"}}>For administrative use.</Typography> Enter email and password.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="email"
              id="login-email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={this.handleEmailInput}
            />
            <TextField
              autoFocus
              margin="dense"
              name="password"
              id="login-password"
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

LoginFormDialogue.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  sign_in_action: PropTypes.string
}

export default LoginFormDialogue
