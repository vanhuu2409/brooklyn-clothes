import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const OrderTrack = ({ activeStep }) => {
  const steps =
    activeStep === "Cancelled"
      ? ["Cancelled"]
      : [
          "Placed",
          "Order Confirmed",
          "Shipped",
          // "Out For Delivery",
          "Delivered",
        ];
  return (
    <div className='w-full'>
      <Stepper
        activeStep={activeStep === "Cancelled" ? 1 : +activeStep}
        alternativeLabel
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel sx={{ color: "#9155FD", fontSize: "2.5rem" }}>
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTrack;
