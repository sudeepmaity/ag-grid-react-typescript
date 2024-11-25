// OrderCreateContainer.tsx
import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, TextField, Button } from "@mui/material";

interface OrderCreateContainerProps {
  open: boolean;
  onClose: () => void;
  onOrderCreated: (order: any) => void;
}

const OrderCreateContainer: React.FC<OrderCreateContainerProps> = ({
  open,
  onClose,
  onOrderCreated,
}) => {
  const [formData, setFormData] = useState({
    port: "",
    firmName: "",
    orderDate: "",
    lockboxNumber: "",
    batchReferenceNumber: "",
    noOfChecks: "",
  });

  // Reset form when the drawer is opened
  useEffect(() => {
    if (open) {
      setFormData({
        port: "",
        firmName: "",
        orderDate: "",
        lockboxNumber: "",
        batchReferenceNumber: "",
        noOfChecks: "",
      });
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    onOrderCreated(formData);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }}>
        <Typography variant="h6">Create Order</Typography>

        <TextField
          label="Port No"
          name="port"
          value={formData.port}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Firm Name"
          name="firmName"
          value={formData.firmName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Order Date"
          name="orderDate"
          value={formData.orderDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Lockbox Number"
          name="lockboxNumber"
          value={formData.lockboxNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Batch/Ticket Reference Number"
          name="batchReferenceNumber"
          value={formData.batchReferenceNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="No. of Checks"
          name="noOfChecks"
          value={formData.noOfChecks}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Drawer>
  );
};

export default OrderCreateContainer;
