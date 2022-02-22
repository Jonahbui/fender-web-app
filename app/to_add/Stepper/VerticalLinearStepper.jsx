import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Ticket Received',
    description: `Request is being processed`,
  },
  {
    label: 'Arriving at Departure location',
    description:
      'The Fender is on its way to the departure location',
  },
  {
    label: 'Load Package',
    description: `Place package into the Fender and confirm`,
  },
  {
    label: 'Arriving at Destination',
    description: `The Fender is on its way to the destination`,
  },
  {
    label: 'Arrived',
    description: `Ready for pickup at destination`,
  }
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
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
            onClick={handleNext}
            sx={{ mt: 1, mr: 1, mb: 2 }}
          >
            Confirm
          </Button>
        </div>
      </Box>
    </Box>
  );
}