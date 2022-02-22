import * as React from 'react';
import { Container, Box, Paper, Grid, Stack, Typography, List, ListItem, Divider, ListItemText } from '@mui/material';

import Ticket from '../../components/Ticket/Ticket';

import { tickets } from '../../models/tickets';
import { locationsInfo } from '../../models/locations';

import VerticalLinearStepper from "../../components/Stepper/VerticalLinearStepper";

export default function Queue() {

  const [ticketSelection, setTicketSelection] = React.useState(null);
  const handleTicketSelect = (event) => {
    var ticket_number = event.currentTarget.id.split('-')[1];
    setTicketSelection(ticket_number);
  }
  return (
    <Grid container spacing={4} p={4}>

      <Grid item xs={12} md={6}>
        <Paper elevation={8} style={{minHeight:500}}>
          <Paper square><Typography variant="h4" align="center">Ticket {ticketSelection}</Typography></Paper>
          <Container align="center" sx={{pt:5}}>
            <VerticalLinearStepper />
          </Container>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={8}>
           <Paper square><Typography variant="h4" align="center">Tickets</Typography></Paper>
           <List style={{padding:0}}>
             {
               tickets.map((ticket) => (
                 <Ticket id={ticket.id} departure={locationsInfo[ticket.departure].label} destination={locationsInfo[ticket.destination].label} current={parseInt(ticketSelection)===parseInt(ticket.id)} selectHandler={handleTicketSelect}></Ticket>
               ))
             }
            </List>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={8}>
           <Paper square><Typography variant="h4" align="center">Info</Typography></Paper>
           <List style={{padding:0}}>
              <ListItem divider>
                <ListItemText primary="Current Ticket" />
                <ListItemText secondary={ticketSelection} edge="end" align="right"/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Tickets" />
                <ListItemText secondary={tickets.length} edge="end" align="right"/>
              </ListItem>
              <Divider light />

            </List>
        </Paper>
      </Grid>

    </Grid>
  );
}