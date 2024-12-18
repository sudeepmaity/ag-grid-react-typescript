// Filename : OrderInfoPanel.tsx
import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrderType } from "./types";
import { ExpandArrow, CollapseArrow } from "./utility";
import { useOrderInfo } from "./hooks/OrderInfoContext";
import { OrderManagementOrderInfo } from "./LeftNavIcons"; // Import the icon

interface OrderInfoPanelProps {
  isVisible: boolean;
  onCollapse: () => void;
  onExpand: () => void;
  orderInfo: OrderType;
}

const OrderInfoPanel: React.FC<OrderInfoPanelProps> = ({
  isVisible,
  onCollapse,
  onExpand,
  orderInfo,
}) => {
  const { selectedFilesAmount, summaryInfo } = useOrderInfo();
  const navigate = useNavigate();

  if (!isVisible) {
    return (
      <Box
        sx={{
          width: "40px",
          backgroundColor: "#f0f0f0",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          py: 2,
        }}
      >
        {/* Clickable icon that navigates on click */}
        <IconButton onClick={() => navigate("/order-management")}>
          <OrderManagementOrderInfo />
        </IconButton>

        {/* The expand button at the bottom */}
        <IconButton onClick={onExpand}>
          <ExpandArrow />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "300px",
        backgroundColor: "#f0f0f0",
        padding: 2,
        height: "100%",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
      }}
    >
      {/* Order Info Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Order Info
        </Typography>
        <Typography variant="body2">Firm Name: {orderInfo.firmName}</Typography>
        <Typography variant="body2">
          Order Date: {orderInfo.orderDate}
        </Typography>
        <Typography variant="body2">
          Lockbox Number: {orderInfo.lockboxNumber}
        </Typography>
        <Typography variant="body2">
          Batch/Ticket Reference Number: {orderInfo.batchReferenceNumber}
        </Typography>
        <Typography variant="body2">
          No. of Checks: {orderInfo.noOfChecks}
        </Typography>
      </Box>

      {/* Summary Info Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Summary
        </Typography>
        <Typography variant="body2">
          Calculated Gross: {selectedFilesAmount.calculatedGross}
        </Typography>
        <Typography variant="body2">
          Reported Net: {summaryInfo.reportedNet}
        </Typography>
        <Typography variant="body2">
          Calculated Net: {summaryInfo.calculatedNet}
        </Typography>
        <Typography variant="body2">
          Net Difference: {summaryInfo.netDifference}
        </Typography>
      </Box>

      {/* Account Info Section */}
      <Box>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Account Info
        </Typography>
        <Typography variant="body2">
          Account No: {summaryInfo.accountNo}
        </Typography>
        <Typography variant="body2">
          FATIC | Split: {summaryInfo.split} | Cost Center:{" "}
          {summaryInfo.costCenter}
        </Typography>
        <Typography variant="body2">National</Typography>
      </Box>

      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
        <IconButton onClick={onCollapse}>
          <CollapseArrow />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OrderInfoPanel;
