// SelectFiles.tsx

import React, { useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FileRowData, OrderType } from "./types";
import { useLocation } from "react-router-dom";
import OrderInfoPanel from "./OrderInfoPanel";
import { useOrderInfo } from "./hooks/OrderInfoContext";

const SelectFiles: React.FC = () => {
  const location = useLocation();
  const orderData = location.state as OrderType | null;
  const [rowData, setRowData] = React.useState<FileRowData[]>([]);
  const [isLeftPanelVisible, setIsLeftPanelVisible] = React.useState(true);
  const [gridApi, setGridApi] = React.useState<any>(null);

  const { setSelectedFilesAmount } = useOrderInfo();

  const columnDefs: ColDef[] = [
    { headerName: "File Number", field: "fileNumber", checkboxSelection: true },
    { headerName: "Account Number", field: "accountNumber" },
    { headerName: "Property Address", field: "propertyAddress" },
    { headerName: "County", field: "county" },
    { headerName: "Property Type", field: "propertyType" },
    { headerName: "Gross", field: "gross", filter: "agNumberColumnFilter" },
    { headerName: "Net", field: "net", filter: "agNumberColumnFilter" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (orderData && orderData.port) {
        try {
          const response = await fetch(
            `http://localhost:${orderData.port}/api/items`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setRowData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [orderData]);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  const onSelectionChanged = useCallback(() => {
    if (gridApi) {
      const selectedNodes = gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map((node: any) => node.data);
      const totalGross = selectedData.reduce(
        (sum: number, row: FileRowData) => sum + row.gross,
        0
      );
      setSelectedFilesAmount({ calculatedGross: totalGross.toString() });
    }
  }, [gridApi, setSelectedFilesAmount]);

  if (!orderData) {
    return (
      <Typography variant="h6" color="error" align="center" sx={{ mt: 4 }}>
        Order data not available.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)",
        marginTop: "64px",
      }}
    >
      <OrderInfoPanel
        isVisible={isLeftPanelVisible}
        onCollapse={() => setIsLeftPanelVisible(false)}
        onExpand={() => setIsLeftPanelVisible(true)}
        orderInfo={orderData}
      />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        {rowData.length === 0 ? (
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            style={{ padding: "20px" }}
          >
            No Files to Display
          </Typography>
        ) : (
          <Box
            className="ag-theme-alpine"
            style={{ height: "100%", width: "100%" }}
          >
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              rowSelection="multiple"
              animateRows={true}
              pagination={true}
              onGridReady={onGridReady}
              onSelectionChanged={onSelectionChanged}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SelectFiles;
