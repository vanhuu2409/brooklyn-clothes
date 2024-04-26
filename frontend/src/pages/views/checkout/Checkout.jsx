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
import Purchase from "./Purchase.jsx";

const Checkout = () => {
  const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];
  const redirectPath = "/login";
  const { currentUser } = useSelector((state) => state.user);

  const [activeStep, setActiveStep] = useState(0);

  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = +querySearch.get("step");

  return (
    <div className='sm:px-6 lg:max-w-[90%] min-h-screen lg:px-8 max-w-2xl px-4 mx-auto'>
      <h1 className='sm:text-7xl my-6 text-6xl font-extrabold text-center'>
        Checkout
      </h1>
      <Box sx={{ width: "100%", marginBottom: "3rem" }}>
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
      </Box>
      {/* DELIVERY ADDRESS */}
      {!currentUser ? (
        <Navigate to={redirectPath} replace />
      ) : step === 2 ? (
        <Navigate to={"/checkout?step=2"} replace /> && <DeliveryAddress />
      ) : step === 3 ? (
        <Navigate to={"/checkout?step=3"} replace /> && <OrderSummary />
      ) : (
        <Navigate to={"/checkout?step=4"} replace /> && <Purchase />
      )}
    </div>
  );
};

export default Checkout;
