import React from "react"
import PropTypes from "prop-types"

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

class TicketComboBox extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Box >
          <Autocomplete
            autoSelect
            disablePortal
            options={this.props.items}
            getOptionLabel={(option) => option.name || "Ticket " + option.id ||""}
            sx={{ width:  this.props.width, pt: 1, display: { xs: 'flex', md: 'flex' }}}
            renderInput={(params) => <TextField {...params} label={this.props.label_name} />}
            onInputChange={this.props.handler}
          />
        </Box>
      </React.Fragment>
    );
  }
}

TicketComboBox.defaultTypes = {
  label_name: "Select Value",
  handler: null,
  items: [],
  width: 300
}

TicketComboBox.propTypes = {
  label_name: PropTypes.string,
  handler: PropTypes.func,
  items: PropTypes.array,
  width: PropTypes.number
}

export default TicketComboBox
