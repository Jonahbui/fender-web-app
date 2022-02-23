import React from "react";
import PropTypes from "prop-types";

import { Box, Grid, Paper, Typography} from '@mui/material';

class Panel extends React.Component {
  render () {
    return (
      <Grid container spacing={4} p={4}>
      {
        this.props.content.map((panel_content) => (
          <Grid item xs={panel_content["xs"]} md={panel_content["md"]} key={panel_content["key"]}>
            <Paper elevation={8} style={{minHeight:panel_content["minHeight"]}}>
              
              <Paper square>
                <Typography variant="h4" align="center">{panel_content["title"]}</Typography>
              </Paper>
              
              <Box style={{padding:0}}>
                {panel_content["component_to_render"]}
              </Box>
              
            </Paper>
          </Grid>
        ))
      }
      </Grid>
    );
  }
}

Panel.defaultProps = {
  content: []
}

Panel.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    xs: PropTypes.number,
    md: PropTypes.number,
    minHeight: PropTypes.number,
    title: PropTypes.string,
    component_to_render: PropTypes.object
  }))
}

export default Panel
