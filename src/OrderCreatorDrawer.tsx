// OrderCreatorDrawer.tsx
import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, TextField, Button } from "@mui/material";

interface OrderCreatorDrawerProps {
  open: boolean;
  onClose: () => void;
  setRowData: React.Dispatch<React.SetStateAction<FileRowData[]>>;
}

interface FileRowData {
  fileNumber: string;
  accountNumber: string;
  propertyAddress: string;
  county: string;
  propertyType: string;
  gross: number;
  net: number;
}

const OrderCreatorDrawer: React.FC<OrderCreatorDrawerProps> = ({
  open,
  onClose,
  setRowData,
}) => {
  const [port, setPort] = useState("");
  const [cheque, setCheque] = useState("");
  const [errors, setErrors] = useState<{ port?: string; cheque?: string }>({});

  // Reset inputs when the drawer is opened
  useEffect(() => {
    if (!open) {
      setPort("");
      setCheque("");
      setErrors({});
    }
  }, [open]);

  // Handle input changes
  const handlePortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPort(event.target.value);
  };

  const handleChequeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheque(event.target.value);
  };

  // Validate inputs
  const validateInputs = () => {
    const errors: { port?: string; cheque?: string } = {};
    if (!port) {
      errors.port = "Port is required";
    } else if (isNaN(Number(port))) {
      errors.port = "Port must be a number";
    }

    if (!cheque) {
      errors.cheque = "Cheque is required";
    } else if (isNaN(Number(cheque))) {
      errors.cheque = "Cheque must be a number";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:${port}/api/items`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRowData(data); // Update the data in the parent component
      onClose(); // Close the drawer
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }} role="presentation">
        <Typography variant="h6">Enter Details</Typography>
        <TextField
          label="Port"
          variant="outlined"
          value={port}
          onChange={handlePortChange}
          fullWidth
          margin="normal"
          error={Boolean(errors.port)}
          helperText={errors.port}
        />
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
