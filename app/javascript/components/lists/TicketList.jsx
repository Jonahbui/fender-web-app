import React from 'react'
import PropTypes from 'prop-types'

import {List as MuiList} from '@mui/material'
import { Divider } from '@mui/material'

import TicketComboBox from '../inputs/TicketComboBox'
import Ticket from '../selects/Ticket'

class TicketList extends React.Component {
  render () {
    return (<React.Fragment>
      <TicketComboBox
        label_name="Search Ticket"
        items={this.props.content}
        handler={this.props.searchHandler}
        width={1}
      />
      <MuiList style={{padding:0}}>
      {
        this.props.content.map((list_content) => (<React.Fragment key={"main-"+list_content['key']}>
          <Ticket 
            id={list_content['id']}
            departure={list_content['departure']}
            destination={list_content['destination']}
            current={list_content['current']}
            selectHandler={this.props.selectHandler}
          />
          <Divider light />
        </React.Fragment>))
      }
    </MuiList></React.Fragment>
    );
  }
}

TicketList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    id: PropTypes.number,
    departure: PropTypes.string,
    destination: PropTypes.string,
    current: PropTypes.bool
  })),
  selectHandler: PropTypes.func,
  searchHandler: PropTypes.func
}

export default TicketList
