// OrderManagementContainer.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import SelectFiles from "./SelectFiles";
import { FileRowData, OrderType } from "./types";

interface OrderManagementContainerProps {
  order: OrderType | null; // Receive the OrderType from parent
}

const OrderManagementContainer: React.FC<OrderManagementContainerProps> = ({
  order,
}) => {
  const [rowData, setRowData] = useState<FileRowData[]>([]);

  // Make API call when order changes
  useEffect(() => {
    if (order) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:${order.port}/api/items`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setRowData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [order]);

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
