// OrderCreatorDrawer.tsx
import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, TextField, Button } from "@mui/material";
import { OrderType } from "./types";

interface OrderCreatorDrawerProps {
  open: boolean;
  onClose: () => void;
  onOrderCreated: (order: OrderType) => void;
}

const OrderCreatorDrawer: React.FC<OrderCreatorDrawerProps> = ({
  open,
  onClose,
  onOrderCreated,
}) => {
  const [cheque, setCheque] = useState("");
  const [errors, setErrors] = useState<{ cheque?: string }>({});

  // Reset inputs when the drawer is opened
  useEffect(() => {
    if (open) {
      setCheque("");
      setErrors({});
    }
  }, [open]);

  // Handle input changes
  const handleChequeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheque(event.target.value);
  };

  // Validate inputs
  const validateInputs = () => {
    const errors: { cheque?: string } = {};

    if (!cheque) {
      errors.cheque = "Cheque is required";
    } else if (isNaN(Number(cheque))) {
      errors.cheque = "Cheque must be a number";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!validateInputs()) {
      return;
    }

    // Create the OrderType object
    const order: OrderType = {
      cheque,
    };

    // Pass the order to the parent component
    onOrderCreated(order);

    // Close the drawer
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }} role="presentation">
        <Typography variant="h6">Enter Details</Typography>
        <TextField
          label="Cheque"
          variant="outlined"
          value={cheque}
          onChange={handleChequeChange}
          fullWidth
          margin="normal"
          error={Boolean(errors.cheque)}
          helperText={errors.cheque}
        />
        <Button variant="contained" onClick={handleSubmit} fullWidth>
          Submit
        </Button>
      </Box>
    </Drawer>
  );
};

export default OrderCreatorDrawer;
