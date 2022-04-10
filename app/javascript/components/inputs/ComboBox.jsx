import React from "react"
import PropTypes from "prop-types"

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';


class ComboBox extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Box >
          <Autocomplete
            id={this.props.id}
            autoSelect
            disablePortal
            options={this.props.items}
            getOptionLabel={(option) => option.name || option.id ||""}
            sx={{ width:  this.props.width, display: { xs: 'flex', md: 'flex' }}}
            renderInput={(params) => <TextField {...params} label={this.props.label_name} />}
            onChange={this.props.handler}
          />
        </Box>
      </React.Fragment>
    );
  }
}

ComboBox.defaultTypes = {
  label_name: "Select Value",
  handler: null,
  items: [],
  width: 300
}

ComboBox.propTypes = {
  label_name: PropTypes.string,
  handler: PropTypes.func,
  items: PropTypes.array,
  width: PropTypes.number
}

export default ComboBox
