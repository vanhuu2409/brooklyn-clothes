import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];
  const redirectPath = "/login";
  const { currentUser } = useSelector((state) => state.user);

  const [activeStep, setActiveStep] = useState(0);

  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = +querySearch.get("step");
  console.log(step);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='sm:px-6 lg:max-w-[90%] min-h-screen lg:px-8 max-w-2xl px-4 mx-auto'>
      <h1 className='sm:text-7xl my-6 text-6xl font-extrabold text-center'>
        Checkout
      </h1>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step - 1}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {step}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color='inherit'
                disabled={activeStep + 1 <= 2}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
      {/* DELIVERY ADDRESS */}
      {!currentUser ? (
        <Navigate to={redirectPath} replace />
      ) : step === 2 ? (
        <Navigate to={"/checkout?step=2"} replace /> && <DeliveryAddress />
      ) : (
        <Navigate to={"/checkout?step=3"} replace /> && <OrderSummary />
      )}
    </div>
  );
};

export default Checkout;
