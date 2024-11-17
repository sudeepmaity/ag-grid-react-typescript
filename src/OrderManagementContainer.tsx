// OrderManagementContainer.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import SelectFiles from "./SelectFiles";
import { FileRowData, OrderType } from "./types";
import { mockData } from "./mockData";

interface OrderManagementContainerProps {
  order: OrderType | null;
}

const OrderManagementContainer: React.FC<OrderManagementContainerProps> = ({
  order,
}) => {
  const [rowData, setRowData] = useState<FileRowData[]>([]);

  // Load mock data when order changes
  useEffect(() => {
    if (order) {
      // Instead of making an API call, load mock data
      setRowData(mockData);
    }
  }, [order]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Select Files for Order</Typography>
      {order && (
        <Typography variant="subtitle1">Cheque: {order.cheque}</Typography>
      )}
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
