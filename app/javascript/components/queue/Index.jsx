import React from "react"
import PropTypes from "prop-types"

import { Container } from '@mui/material'
import List from '../lists/List'
import HyperlinkList from '../lists/HyperlinkList'
import TicketList from '../lists/TicketList'
import Panel from '../panels/Panel'
import VerticalLinearStepper from '../visualizers/VerticalLinearStepper'

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      current_ticket_selected: -1
    }
    this.handleTicketSelect = this.handleTicketSelect.bind(this)
    this.handleTicketSearch = this.handleTicketSearch.bind(this)
  }
  handleTicketSelect(event){
    let ticket_number = parseInt(event.currentTarget.attributes.value.value)
    this.setState({current_ticket_selected: ticket_number})
  }
  handleTicketSearch(event){
    if(event.target.innerText){
      let ticket_number = parseInt(event.target.innerText.split(' ')[1])
      this.setState({current_ticket_selected: ticket_number})
    }
  }

  render () {
    const ticket_componenet =  <Container align="center" sx={{ my: 4 }}>
        <VerticalLinearStepper steps={this.props.steps}/>
      </Container>
    
    const content = [
      { 
        key: 'queue-ticket',
        title: `Ticket ${this.state.current_ticket_selected}`,
        xs: 12, 
        md: 6, 
        minHeight: 0, 
        component_to_render: ticket_componenet
      },
      { 
        key: "queue-tickets",
        title: "Tickets", 
        xs: 12, 
        md: 3, 
        minHeight: 0, 
        component_to_render: <TicketList 
          content={this.props.tickets_content} 
          selectHandler={this.handleTicketSelect}
          searchHandler={this.handleTicketSearch}
        /> 
      },
      { 
        key: 'queue-info',
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
