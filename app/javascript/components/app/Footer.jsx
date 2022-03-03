import React from "react"
import PropTypes from "prop-types"

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import { House } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ConstructionIcon from '@mui/icons-material/Construction';

class Footer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Paper sx={{ position: 'fixed', bottom:0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels>
            <BottomNavigationAction href={this.props.queue_path} label="Queue" icon={<ConfirmationNumberIcon />} />
            <BottomNavigationAction href={this.props.home_path} label="Home" icon={<House />} />
            <BottomNavigationAction href={this.props.info_path} label="Info" icon={<InfoIcon />} />
            {
              this.props.signed_in &&
              <BottomNavigationAction href={this.props.admin_path} label="Admin" icon={<ConstructionIcon style={{color: 'red'}}/>} />
            }
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
  queue_path: PropTypes.string,
  home_path: PropTypes.string,
  info_path: PropTypes.string,
  admin_path: PropTypes.string
}

export default Footer
