import React from 'react'
import PropTypes from 'prop-types'

import {List as MuiList} from '@mui/material'
import { Divider, ListItem, ListItemText } from '@mui/material'
import { lightBlue } from "@mui/material/colors"

class HyperlinkList extends React.Component {
  render () {
    return (
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
    );
  }
}

HyperlinkList.defaultTypes = {
  content: []
}

HyperlinkList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    link: PropTypes.string,
    link_text: PropTypes.string
  }))
}

export default HyperlinkList
