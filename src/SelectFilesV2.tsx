// Filename: SelectFiles.tsx

import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FileRowData, OrderType, SummaryType } from "./types";
import { useLocation } from "react-router-dom";
import OrderInfoPanel from "./OrderInfoPanel";
import GlobalHeader from "./GlobalHeader"; // Assuming you have a GlobalHeader component

const useStyles = makeStyles(() => ({
  routeRoot: {
    display: "flex",
    flex: "10 auto",
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: "auto",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    position: "fixed", // Optional: Use if you want the loader to be fixed on the screen
  },
  mainContent: {
    flexGrow: 1,
    padding: 16, // Assuming theme.spacing(2) equals 16px
  },
  agGridContainer: {
    height: "100%",
    width: "100%",
  },
}));

const defaultSummaryInfo: SummaryType = {
  calculatedGross: "N/A",
  reportedNet: "N/A",
  calculatedNet: "N/A",
  netDifference: "N/A",
  accountNo: "N/A",
  split: "N/A",
  costCenter: "N/A",
};

const SelectFiles: React.FC = () => {
  const location = useLocation();
  const orderData = location.state as OrderType | null;
  const [rowData, setRowData] = useState<FileRowData[]>([]);
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true);
  const classes = useStyles();

  const columnDefs: ColDef[] = [
    { headerName: "File Number", field: "fileNumber", checkboxSelection: true },
    { headerName: "Account Number", field: "accountNumber" },
    { headerName: "Property Address", field: "propertyAddress" },
    { headerName: "County", field: "county" },
    { headerName: "Property Type", field: "propertyType" },
    { headerName: "Gross", field: "gross", filter: "agNumberColumnFilter" },
    { headerName: "Net", field: "net", filter: "agNumberColumnFilter" },
  ];

  // Fetch data based on orderData.port
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

  if (!orderData) {
    return (
      <Typography variant="h6" color="error" align="center" sx={{ mt: 4 }}>
        Order data not available.
      </Typography>
    );
  }

  return (
    <>
      <div className={clsx(classes.routeRoot, "routeRoot")}>
        <GlobalHeader />
        <OrderInfoPanel
          isVisible={isLeftPanelVisible}
          onCollapse={() => setIsLeftPanelVisible(false)}
          onExpand={() => setIsLeftPanelVisible(true)}
          orderInfo={orderData}
          summaryInfo={defaultSummaryInfo}
        />
        <div className={classes.mainContent}>
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
            <div className={clsx("ag-theme-alpine", classes.agGridContainer)}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                rowSelection="multiple"
                animateRows={true}
                pagination={true}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectFiles;
