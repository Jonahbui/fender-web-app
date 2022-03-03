import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from '@mui/material'

class Ticket extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ListItem 
          id={this.props.id} button 
          onClick={this.props.selectHandler}
          value={this.props.id}
        >
          <ListItemText 
            primary={`Ticket ${this.props.id}`} 
            secondary={`${this.props.departure} to ${this.props.destination}`} 
          />
          { this.props.current &&
              <ListItemText secondary="Current" edge="end" align="right"/>
          }
        </ListItem>
      </React.Fragment>
    );
  }
}

Ticket.propTypes = {
  id: PropTypes.number,
  departure: PropTypes.string,
  destination: PropTypes.string,
  current: PropTypes.bool,
  selectHandler: PropTypes.func
}

export default Ticket
