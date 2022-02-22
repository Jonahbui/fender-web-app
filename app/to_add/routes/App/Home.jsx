import { Container, Box, Paper, Grid, Stack, Typography, List, ListItem, Divider, ListItemText } from '@mui/material';

export default function Home() {
  return (
    <Grid container spacing={4} p={4}>

      <Grid item xs={12} md={6} >
        <Paper elevation={8} style={{minHeight:500}}>
           <Paper square><Typography variant="h4" align="center">Introduction</Typography></Paper>
           <Box style={{padding:20, paddingTop:0}}>
             <p>
              <b>Fender</b> is a robot that delivers packages around the ERB. It reduces the load 
              of UTA personnel through this semi-automotated service.
             </p>
           </Box>

        </Paper>
      </Grid>

      <Grid item xs={12} md={6} >
        <Paper elevation={8} style={{minHeight:500}}>
           <Paper square><Typography variant="h4" align="center">How To Use</Typography></Paper>
           <Box style={{padding:20, paddingTop:10}}>
            <Typography variant="h6">Process</Typography>
            <ol>
              <li>Select a departure location (where the Fender will arrive to pick up the package, and leave from).</li>
              <li>Select a destination (where the Fender will arrive and drop off the package).</li>
              <li>Submit</li>
            </ol>
            <Typography variant="p">
              After submitting your request, you will receive a ticket number, and will be 
              redirected to the queue page for that ticket. You may use the ticket number, to locate,
              and check on the status of your ticket.
            </Typography>

            <Typography variant="h6" sx={{mt:2}}>Tips</Typography>
            <ul>
              <li>Departure - where the Fender will arrive to pick up the package, and leave from</li>
              <li>Destination - where the Fender will arrive and drop off the package</li>
            </ul>
           </Box>

        </Paper>
      </Grid>

    </Grid>
  );
}