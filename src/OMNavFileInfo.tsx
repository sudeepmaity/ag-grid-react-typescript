import React from "react";
import { Box, Typography } from "@mui/material";
import { OrderType, SummaryType } from "./types";

interface OMNavFileInfoProps {
  orderInfo: OrderType;
  summaryInfo: SummaryType;
}

const OMNavFileInfo: React.FC<OMNavFileInfoProps> = ({
  orderInfo,
  summaryInfo,
}) => {
  return (
    <Box>
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
          Calculated Gross: {summaryInfo.calculatedGross}
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
    </Box>
  );
};

export default OMNavFileInfo;
