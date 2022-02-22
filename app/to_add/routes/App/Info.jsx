import { Container, Box, Paper, Grid, Stack, Typography, List, ListItem, Divider, ListItemText } from '@mui/material';

export default function Info() {
  return (
    <Grid container spacing={4} p={4}>

      <Grid item xs={12} md={3}>
        <Paper elevation={8}>
           <Paper square><Typography variant="h4" align="center">Service</Typography></Paper>
           <List style={{padding:0}}>
              <ListItem>
                <ListItemText primary="Fender Connection" />
                <ListItemText secondary="Offline" edge="end" align="right"/>
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Current Ticket" />
                <ListItemText secondary="1" edge="end" align="right"/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Tickets" />
                <ListItemText secondary="1" edge="end" align="right"/>
              </ListItem>
              <Divider light />

            </List>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={8}>
           <Paper square><Typography variant="h4" align="center">Fender</Typography></Paper>
           <List style={{padding:0}}>
              <ListItem>
                <ListItemText primary="Battery Life" />
                <ListItemText secondary="0%" edge="end" align="right"/>
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Last Location" />
                <ListItemText secondary="ERB 335A Indefinitely" edge="end" align="right"/>
              </ListItem>
            </List>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={8}>
           <Paper square><Typography variant="h4" align="center">Help Service</Typography></Paper>
           <List style={{padding:0}}>
              <ListItem>
                <ListItemText primary="Email" />
                <ListItemText secondary="erb@uta.edu" edge="end" align="right"/>
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Phone Number" />
                <ListItemText secondary="1-800-265-EMPIRE" edge="end" align="right"/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" />
                <ListItemText secondary="ERB 335A" edge="end" align="right"/>
              </ListItem>
              <Divider light />
            </List>
        </Paper>
      </Grid>

    </Grid>
  );
}