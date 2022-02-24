import React from "react"
import PropTypes from "prop-types"

import { ListItem, ListItemText, Divider } from '@mui/material';


class Ticket extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ListItem id={`ticket-${props.id}`} button onClick={props.selectHandler}>
          <ListItemText primary={`Ticket ${props.id}`} secondary={`${props.departure} to ${props.destination}`} />
          { props.current &&
              <ListItemText secondary="Current" edge="end" align="right"/>
          }
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
}

Ticket.propTypes = {
  key: PropTypes.string,
  id: PropTypes.string,
  selectHandler: PropTypes.function,
  departure: PropTypes.string,
  destination: PropTypes.string
}

export default Ticket
