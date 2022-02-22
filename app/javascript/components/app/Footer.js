import React from "react"
import PropTypes from "prop-types"

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import { House } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

class Footer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Paper sx={{ position: 'fixed', bottom:0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels>
            <BottomNavigationAction href={this.props.queue_url} label="Queue" icon={<ConfirmationNumberIcon />} />
            <BottomNavigationAction href={this.props.home_url} label="Home" icon={<House />} />
            <BottomNavigationAction href={this.props.info_url} label="Info" icon={<InfoIcon />} />
          </BottomNavigation>
        </Paper>
        <Paper className="hidden" sx={{ position: 'relative', bottom:0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation></BottomNavigation>
        </Paper>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  queue_url: PropTypes.string,
  home_url: PropTypes.string,
  info_url: PropTypes.string,
}

export default Footer
