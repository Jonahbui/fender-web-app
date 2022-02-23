import React from "react"
import PropTypes from "prop-types"

import {List as MuiList} from '@mui/material';
import { Divider, ListItem, ListItemText } from '@mui/material';
import { lightBlue } from "@mui/material/colors";

class HyperlinkList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <MuiList style={{padding:0}}>
          {
            this.props.content.map((list_content) => (<div key={list_content["key"]}>
              <ListItem button component="a" href={list_content["link"]} sx={{color: '#0277bd'}}>
                <ListItemText primary={list_content["link_text"]} />
              </ListItem>
              <Divider light />
            </div>))
          }
        </MuiList>
      </React.Fragment>
    );
  }
}

HyperlinkList.defaultTypes = {
  content: []
}

HyperlinkList.propTypes = {
  content: PropTypes.array
}

export default HyperlinkList
