// Dashboard.tsx
import React from "react";
import { Typography } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div style={{ marginTop: 100, textAlign: "center" }}>
      <Typography variant="h4">Order Management</Typography>
      <Typography variant="body1">
        Please create a new order to get started.
      </Typography>
    </div>
  );
};

export default Dashboard;
