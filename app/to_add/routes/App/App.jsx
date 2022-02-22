import {
  Outlet
} from "react-router-dom";

import AutoBox from "../../components/ComboBox/AutoBox";
import { Button, Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { locations } from "../../models/locations";
import { tickets } from "../../models/tickets";

export default function App() {
  var a = 10;
  const [departure, setDeparture] = React.useState(null);
  const [destination, setDestination] = React.useState(null);

  const handleDepartureSelect = (event, value) => {
    locations.forEach(location => {
      if(location.label == value){
        setDeparture(location.code);
      }
    });
  }

  const handleDestinationSelect = (event, value) => {
    locations.forEach(location => {
      if(location.label == value){
        setDestination(location.code);
      }
    });
  }

  function submitRequest (){
    const data = {
      "id"        : a++,
      "departure" : departure,
      "destination" : destination
    }
    console.log(data);
    tickets.push(data);
  };

  return (
    <div>

      <Container align="center">
        <Stack spacing={3}>
          <Typography
            variant="h4"
            noWrap
            component="div"
            marginTop={3}
          >
            Request Services
          </Typography>
          <AutoBox id="departure" name={"Departure"} handler={handleDepartureSelect} />
          <AutoBox id="destination" name={"Destination"} handler={handleDestinationSelect}  />
          <Box>
            <Button onClick={submitRequest} variant="contained" sx={{ width: 300 }} >Submit</Button>
          </Box>
            
        </Stack>
      </Container>
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          borderColor: "rgb(220, 220, 220)"
        }}
      >
      </nav>
      <Outlet />
    </div>

  )
}
