import React from "react"
import PropTypes from "prop-types"

import { Button, Box, Container, Stack, Typography } from '@mui/material';
import ComboBox from "../inputs/ComboBox"
import Panel from "../panels/Panel"

class Index extends React.Component {
  render () {
    const enqueue_content = <Container sx={{padding: 2}}>
      <Stack spacing={3} align="center">
        <ComboBox label_name="Departure" items={this.props.locations}/>
        <ComboBox label_name="Destination" items={this.props.locations}/>
        <Box>
          <Button variant="contained" sx={{ width: 300 }} >Submit</Button>
        </Box>
      </Stack>
    </Container>
    const instructions_content = <Container padding={20}>

    </Container>
    const overview_content = <Container padding={20}>

    </Container>
    const panel_content = [
      { title: "Enqueue", xs: 12, md: 12, minHeight: 0, component_to_render: enqueue_content, key: "enqueue-enqueue"},
      { title: "Instructions", xs: 12, md: 6, minHeight: 0, component_to_render: instructions_content, key: "enqueue-instructions"},
      { title: "Overview", xs: 12, md: 6, minHeight: 0, component_to_render: "", key: "enqueue-overview" }
    ]
    return (
      <React.Fragment>
        <Panel content={panel_content}/>
      </React.Fragment>
    );
  }
}

export default Index
