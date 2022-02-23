import React from "react"
import PropTypes from "prop-types"

import { Container } from '@mui/material'
import HyperlinkList from '../lists/HyperlinkList'
import Panel from '../panels/Panel'
import VerticalLinearStepper from '../visualizers/VerticalLinearStepper'

class Index extends React.Component {
  render () {
     const content = [
      { title: "Tickets", xs: 12, md: 3, minHeight: 0, component_to_render: <HyperlinkList content={this.props.service_content}/> },
      { title: "Ticket", xs: 12, md: 6, minHeight: 0, component_to_render:  <Container align="center"><VerticalLinearStepper steps={this.props.steps}/></Container>},
      { title: "Info", xs: 12, md: 3, minHeight: 0, component_to_render: <HyperlinkList content={this.props.service_content}/> }
    ]
    return (
      <Panel content={content}/>
    );
  }
}

export default Index
