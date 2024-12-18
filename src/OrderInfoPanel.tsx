// Filename: OrderInfoPanel.tsx
import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { OrderType } from "./types";
import { ExpandArrow, CollapseArrow } from "./utility";
import { useOrderInfo } from "./hooks/OrderInfoContext";

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
  const { selectedFilesAmount, summaryInfo, accountInfoList } = useOrderInfo();

  if (!isVisible) {
    return (
      <Box
        sx={{
          width: "40px",
          backgroundColor: "#f0f0f0",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
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
        height: "calc(100vh - 64px)",
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
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Account Info
        </Typography>
        {accountInfoList.length === 0 ? (
          <Typography variant="body2">No accounts selected.</Typography>
        ) : (
          accountInfoList.map((acc) => (
            <Box key={acc.accountId} sx={{ marginBottom: 2 }}>
              <Typography variant="body2">
                Account No: {acc.accountId}
              </Typography>
              <Typography variant="body2">
                FATIC | Split: {acc.split} | Cost Center: {acc.costCenter}
              </Typography>
              {acc.isNational && (
                <Typography variant="body2">National</Typography>
              )}
            </Box>
          ))
        )}
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
