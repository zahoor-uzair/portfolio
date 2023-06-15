import { Box, Button } from "@mui/material";
import React from "react";

const NextStepHandlerComponent = ({
  index,
  steps,
  handleBack,
  handleNext,
}: {
  index: any;
  steps: any;
  handleBack: () => void;
  handleNext: () => void;
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <div>
        <Button
          variant="outlined"
          onClick={handleNext}
          sx={{
            mt: 1,
            mr: 1,
            fontWeight: 700,
            color: "rgb(141, 126, 60)",
            borderColor: "rgb(141, 126, 60)",
            "&:hover": {
              backgroundColor: "rgb(141, 126, 60)",
              color: "white",
              border: "none",
            },
          }}
        >
          {index === steps.length - 1 ? "Finish" : "Continue"}
        </Button>
        <Button
          disabled={index === 0}
          onClick={handleBack}
          sx={{
            mt: 1,
            mr: 1,
            fontWeight: 700,
            color: "rgb(141, 126, 60)",
            "&:hover": {
              backgroundColor: "rgba(141, 126, 60, 0.3)",
            },
          }}
        >
          Back
        </Button>
      </div>
    </Box>
  );
};

export default NextStepHandlerComponent;
