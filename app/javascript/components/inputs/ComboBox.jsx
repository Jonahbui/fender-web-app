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
            autoSelect
            disablePortal
            options={this.props.items}
            getOptionLabel={(option) => option.name || ""}
            sx={{ width:  300, display: { xs: 'flex', md: 'flex' }}}
            renderInput={(params) => <TextField {...params} label={this.props.label_name} />}
            onInputChange={this.props.handler}
          />
        </Box>
      </React.Fragment>
    );
  }
}

export default ComboBox
