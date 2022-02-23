import React from "react";
import PropTypes from "prop-types";

import { Container, Grid, Paper, Typography} from '@mui/material';

class Panel extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Grid container spacing={4} p={4}>
          {
            this.props.content.map((panel_content) => (
              <Grid item xs={panel_content["xs"]} md={panel_content["md"]} key={panel_content["key"]}>
                <Paper elevation={8} style={{minHeight:panel_content["minHeight"]}}>
                  <Paper square><Typography variant="h4" align="center">{panel_content["title"]}</Typography></Paper>
                  <Container align="center" style={{padding:0}}>
                    {panel_content["component_to_render"]}
                  </Container>
                </Paper>
              </Grid>
            ))
          }
        </Grid>
      </React.Fragment>
    );
  }
}



Panel.propTypes = {
  content: PropTypes.array
}

export default Panel
