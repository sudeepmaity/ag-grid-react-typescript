import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  TextField,
} from "@mui/material";
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

const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [port, setPort] = useState("");
  const [cheque, setCheque] = useState("");
  const [rowData, setRowData] = useState<FileRowData[]>([]);
  const [errors, setErrors] = useState<{ port?: string; cheque?: string }>({});

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
    setPort("");
    setCheque("");
    setErrors({});
  };

  const handlePortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPort(event.target.value);
  };

  const handleChequeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheque(event.target.value);
  };

  const validateInputs = () => {
    const errors: { port?: string; cheque?: string } = {};
    if (!port) {
      errors.port = "Port is required";
    } else if (isNaN(Number(port))) {
      errors.port = "Port must be a number";
    }

    if (!cheque) {
      errors.cheque = "Cheque is required";
    } else if (isNaN(Number(cheque))) {
      errors.cheque = "Cheque must be a number";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:${port}/api/items`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRowData(data);
      setOpenDrawer(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Column definitions for AgGrid
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
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={handleDrawerOpen}>
            Create New Order
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
        <Box sx={{ width: 300, p: 2 }} role="presentation">
          <Typography variant="h6">Enter Details</Typography>
          <TextField
            label="Port"
            variant="outlined"
            value={port}
            onChange={handlePortChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.port)}
            helperText={errors.port}
          />
          <TextField
            label="Cheque"
            variant="outlined"
            value={cheque}
            onChange={handleChequeChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.cheque)}
            helperText={errors.cheque}
          />
          <Button variant="contained" onClick={handleSubmit} fullWidth>
            Submit
          </Button>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ p: 2 }}>
        <Box>
          <Typography variant="h6">Select Files for Order</Typography>
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <TextField variant="outlined" placeholder="Search" />
            <Box>
              <Typography variant="body2">[User Avatar]</Typography>
            </Box>
          </Box>
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
        </Box>
      </Box>
    </div>
  );
};

export default App;
