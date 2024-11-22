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
  const [port, setPort] = useState("");
  const [firmName, setFirmName] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [lockboxNumber, setLockboxNumber] = useState("");
  const [batchReferenceNumber, setBatchReferenceNumber] = useState("");
  const [noOfChecks, setNoOfChecks] = useState("");

  // Reset all fields when the drawer is opened
  useEffect(() => {
    if (open) {
      setPort("");
      setFirmName("");
      setOrderDate("");
      setLockboxNumber("");
      setBatchReferenceNumber("");
      setNoOfChecks("");
    }
  }, [open]);

  // Handle form submission
  const handleSubmit = () => {
    const newOrder: OrderType = {
      firmName: firmName || "N/A",
      orderDate: orderDate || "N/A",
      lockboxNumber: lockboxNumber || "N/A",
      batchReferenceNumber: batchReferenceNumber || "N/A",
      noOfChecks: noOfChecks || "N/A",
    };

    onOrderCreated(newOrder);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }}>
        <Typography variant="h6">Create Order</Typography>

        <TextField
          label="Port No"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Firm Name"
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Order Date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Lockbox Number"
          value={lockboxNumber}
          onChange={(e) => setLockboxNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Batch/Ticket Reference Number"
          value={batchReferenceNumber}
          onChange={(e) => setBatchReferenceNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="No. of Checks"
          value={noOfChecks}
          onChange={(e) => setNoOfChecks(e.target.value)}
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

export default OrderCreatorDrawer;
