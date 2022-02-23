import React from "react"
import PropTypes from "prop-types"

import List from "../lists/List"
import HyperlinkList from "../lists/HyperlinkList"
import Panel from "../panels/Panel"


class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Panel content={[
          {
            title: "Service", 
            xs: 12, 
            md: 3, 
            minHeight: 0, 
            component_to_render: <List content={this.props.service_content}/>, 
            key: "info-service" 
          },
          { 
            title: "Fender", 
            xs: 12, 
            md: 3, 
            minHeight: 0, 
            component_to_render: <List content={this.props.fender_content}/>, 
            key: "info-fender" 
          },
          { 
            title: "Documentation", 
            xs: 12, 
            md: 3, 
            minHeight: 0, 
            component_to_render: <HyperlinkList content={this.props.docs_content}/>, 
            key: "info-docs" 
          },
          { 
            title: "Support", 
            xs: 12, 
            md: 3, 
            minHeight: 0, 
            component_to_render: <List content={this.props.support_content}/>, 
            key: "info-support" 
          }
        ]}/>
      </React.Fragment>
    );
  }
}

export default Index
