import React from "react"
import PropTypes from "prop-types"

import { Container } from '@mui/material'
import List from '../lists/List'
import HyperlinkList from '../lists/HyperlinkList'
import Panel from '../panels/Panel'
import VerticalLinearStepper from '../visualizers/VerticalLinearStepper'

class Index extends React.Component {
  render () {
    const ticket_componenet =  <Container align="center" sx={{ my: 4 }}>
        <VerticalLinearStepper steps={this.props.steps}/>
      </Container>
    const content = [
      { 
        title: "Tickets", 
        xs: 12, 
        md: 3, 
        minHeight: 0, 
        component_to_render: <HyperlinkList content={this.props.tickets_content}/> 
      },
      { 
        title: "Ticket", 
        xs: 12, 
        md: 6, 
        minHeight: 0, 
        component_to_render: ticket_componenet
      },
      { 
        title: "Info", 
        xs: 12, 
        md: 3, 
        minHeight: 0, 
        component_to_render: <List content={this.props.info_content}/> 
      }
    ]
    return (
      <Panel content={content}/>
    );
  }
}

export default Index
