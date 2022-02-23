import React from "react"
import PropTypes from "prop-types"

import {List as MuiList} from '@mui/material';
import { Divider, ListItem, ListItemText } from '@mui/material';

class List extends React.Component {
  render () {
    return (
      <MuiList style={{padding:0}}>
      {
        this.props.content.map((list_content) => (<div key={list_content["key"]}>
          <ListItem>
            <ListItemText primary={list_content["primary_text"]} />
            <ListItemText secondary={list_content["secondary_text"]} edge="end" align="right"/>
          </ListItem>
          <Divider light />
        </div>))
      }
      </MuiList>
    );
  }
}

List.defaultTypes = {
  content: []
}

List.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    primary_text: PropTypes.string,
    secondary_text: PropTypes.string
  }))
}

export default List
