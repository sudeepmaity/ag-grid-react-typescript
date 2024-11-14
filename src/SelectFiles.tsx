// SelectFiles.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface FileRowData {
  fileNumber: string;
  accountNumber: string;
  propertyAddress: string;
  county: string;
  propertyType: string;
  gross: number;
  net: number;
}

interface SelectFilesProps {
  rowData: FileRowData[];
}

const SelectFiles: React.FC<SelectFilesProps> = ({ rowData }) => {
  const columnDefs: ColDef[] = [
    { headerName: "File Number", field: "fileNumber", checkboxSelection: true },
    { headerName: "Account Number", field: "accountNumber" },
    { headerName: "Property Address", field: "propertyAddress" },
    { headerName: "County", field: "county" },
    { headerName: "Property Type", field: "propertyType" },
    { headerName: "Gross", field: "gross", filter: "agNumberColumnFilter" },
    { headerName: "Net", field: "net", filter: "agNumberColumnFilter" },
  ];

  return (
    <Box
      className="ag-theme-alpine"
      style={{ height: 600, width: "100%", marginTop: 20 }}
    >
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
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection="multiple"
          animateRows={true}
          pagination={true}
        />
      )}
    </Box>
  );
};

export default SelectFiles;
