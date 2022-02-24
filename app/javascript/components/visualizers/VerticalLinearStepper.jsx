import React from "react"
import PropTypes from "prop-types"

import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material'

class VerticalLinearStepper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeStep: 0
    }
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    this.setState({ activeStep: this.state.activeStep + 1 })
  }

  handleBack() {

  }

  handleReset() {

  }

  render () {
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={this.state.activeStep} orientation="vertical">
          {this.props.steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>

                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mb: 2 }}>
          <div>
            <Button
              variant="contained"
              onClick={this.handleNext}
              sx={{ mt: 1, mr: 1, mb: 2 }}
            >
              Confirm
            </Button>
          </div>
        </Box>
      </Box>
    );
  }
}

export default VerticalLinearStepper
