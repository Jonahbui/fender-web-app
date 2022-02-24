import React from "react"
import PropTypes from "prop-types"

import { 
  AppBar,
  Box,
  Button,
  Container,

  Backdrop,
  Modal,

  Toolbar,
  Typography
} from '@mui/material';

import Logo from "../logos/Logo";

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
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
                <Button color="inherit">Login</Button>
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
