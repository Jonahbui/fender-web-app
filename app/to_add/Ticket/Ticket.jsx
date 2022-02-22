import { List, ListItem, ListItemText, Divider } from '@mui/material';

export default function Ticket(props){ return(<>
  <ListItem id={`ticket-${props.id}`} button onClick={props.selectHandler}>
    <ListItemText primary={`Ticket ${props.id}`} secondary={`${props.departure} to ${props.destination}`} />
    { props.current &&
        <ListItemText secondary="Current" edge="end" align="right"/>
    }
  </ListItem>
  <Divider />
</>)}