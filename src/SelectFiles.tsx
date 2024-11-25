// SelectFiles.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FileRowData, OrderType } from "./types";
import OMLeftNav from "./OMLeftNav";
import OMNavFileInfo from "./OMNavFileInfo";

interface SelectFilesProps {
  orderData: OrderType;
}

const SelectFiles: React.FC<SelectFilesProps> = ({ orderData }) => {
  const [rowData, setRowData] = useState<FileRowData[]>([]);
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true);

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

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)", // Adjust if your header height is different
        marginTop: "64px",
      }}
    >
      <OMLeftNav
        isVisible={isLeftPanelVisible}
        onCollapse={() => setIsLeftPanelVisible(false)}
        onExpand={() => setIsLeftPanelVisible(true)}
      >
        <OMNavFileInfo
          orderInfo={orderData}
          summaryInfo={{
            calculatedGross: "N/A",
            reportedNet: "N/A",
            calculatedNet: "N/A",
            netDifference: "N/A",
            accountNo: "N/A",
            split: "N/A",
            costCenter: "N/A",
          }}
        />
      </OMLeftNav>
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
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SelectFiles;
