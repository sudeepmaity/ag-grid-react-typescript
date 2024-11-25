import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { OrderType } from "./types";

interface SelectFilesProps {
  orderData: OrderType;
}

const SelectFiles: React.FC<SelectFilesProps> = ({ orderData }) => {
  const columnDefs: ColDef[] = [
    { headerName: "File Number", field: "fileNumber", checkboxSelection: true },
    { headerName: "Account Number", field: "accountNumber" },
    { headerName: "Property Address", field: "propertyAddress" },
    { headerName: "County", field: "county" },
    { headerName: "Property Type", field: "propertyType" },
    { headerName: "Gross", field: "gross", filter: "agNumberColumnFilter" },
    { headerName: "Net", field: "net", filter: "agNumberColumnFilter" },
  ];

  const rowData = [
    {
      fileNumber: "FN123",
      accountNumber: "AC987",
      propertyAddress: "123 Main St",
      county: "Orange",
      propertyType: "Residential",
      gross: 1000,
      net: 850,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

export default SelectFiles;
