import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

import { locations } from '../../models/locations';

export default function AutoBox(props) {
  return (
  <Box >
    <Autocomplete
      autoSelect
      disablePortal
      options={locations}
      sx={{ width:  300, display: { xs: 'flex', md: 'flex' }}}
      renderInput={(params) => <TextField {...params} label={props.name} />}
      onInputChange={props.handler}
    />
  </Box>

  );
}