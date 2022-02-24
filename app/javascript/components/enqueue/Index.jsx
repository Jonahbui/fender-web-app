import React from "react"
import PropTypes from "prop-types"

import { Button, Box, Container, Stack, Typography } from '@mui/material';
import ComboBox from "../inputs/ComboBox"
import Panel from "../panels/Panel"

class Index extends React.Component {
  render () {
    const enqueue_content = <Container sx={{p: 4}}>
      <Stack spacing={3} align="center">
        <ComboBox label_name="Departure" items={this.props.locations}/>
        <ComboBox label_name="Destination" items={this.props.locations}/>
        <Box>
          <Button variant="contained" sx={{ width: 300 }} >Submit</Button>
        </Box>
      </Stack>
    </Container>


    const instructions_content = <Box sx={{px: 4, pb: 4, pt: 2}}>
      <Typography variant="h6">Process</Typography>
      <ol>
        <Typography>
          <li>Select a departure location</li>
          <li>Select a destination</li>
          <li>Submit</li>
        </Typography>
      </ol>
      <Typography>
        After submitting your request, you will receive a ticket number, and will be 
        redirected to the queue page for that ticket. You may use the ticket number to locate,
        and checkup on the status of your ticket.
      </Typography>

      <Typography variant="h6" sx={{mt:2}}>Tips</Typography>
      <ul>
        <Typography>
          <li><b>Departure</b> is where the Fender will arrive to pick up the package, and leave from</li>
          <li><b>Destination</b> is where the Fender will go to drop off the package</li>
        </Typography>
      </ul>
    </Box>


    const overview_content = <Box sx={{px: 4, pb: 4, pt: 2}}>
        <Typography variant="h6">What is Fender?</Typography>
        <Typography>
          <b>Fender</b> is a robot that delivers packages around the ERB. It reduces the load 
          of UTA personnel through this semi-automotated service. Fender is an acronym coined by 
          Ian Klobe, standing for fully electronic next delivery errand runner.
        </Typography>
    </Box>


    const panel_content = [
      { title: "Enqueue", xs: 12, md: 12, minHeight: 0, component_to_render: enqueue_content, key: "enqueue-enqueue"},
      { title: "Instructions", xs: 12, md: 6, minHeight: 0, component_to_render: instructions_content, key: "enqueue-instructions"},
      { title: "Overview", xs: 12, md: 6, minHeight: 0, component_to_render: overview_content, key: "enqueue-overview" }
    ]

    
    return (
      <Panel content={panel_content}/>
    );
  }
}

export default Index
