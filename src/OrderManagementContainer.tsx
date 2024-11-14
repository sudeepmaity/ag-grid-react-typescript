// OrderManagementContainer.tsx
import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import SelectFiles from "./SelectFiles";

interface FileRowData {
  fileNumber: string;
  accountNumber: string;
  propertyAddress: string;
  county: string;
  propertyType: string;
  gross: number;
  net: number;
}

interface OrderManagementContainerProps {
  rowData: FileRowData[];
}

const OrderManagementContainer: React.FC<OrderManagementContainerProps> = ({
  rowData,
}) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Select Files for Order</Typography>
      <Box display="flex" alignItems="center" gap={2} mt={2}>
        <TextField variant="outlined" placeholder="Search" />
        <Box>
          <Typography variant="body2">[User Avatar]</Typography>
        </Box>
      </Box>
      {/* Use the SelectFiles component */}
      <SelectFiles rowData={rowData} />
    </Box>
  );
};

export default OrderManagementContainer;
