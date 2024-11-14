// Header.tsx
import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button, Typography } from "@mui/material";
import OrderCreatorDrawer from "./OrderCreatorDrawer";
import OrderManagementContainer from "./OrderManagementContainer";

interface FileRowData {
  fileNumber: string;
  accountNumber: string;
  propertyAddress: string;
  county: string;
  propertyType: string;
  gross: number;
  net: number;
}

const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 0: Home, 1: Order Management, 2: Accounting
  const [openDrawer, setOpenDrawer] = useState(false);
  const [rowData, setRowData] = useState<FileRowData[]>([]);

  // Handle tab changes
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Handle drawer open/close
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Tabs on the left side */}
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{ flexGrow: 1 }}
          >
            <Tab label="Home" />
            <Tab label="Order Management" />
            <Tab label="Accounting" />
          </Tabs>
          {/* "Create New Order" button on the right side, visible only on Order Management tab */}
          {selectedTab === 1 && (
            <Button color="inherit" onClick={handleDrawerOpen}>
              Create New Order
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Conditionally render content based on selected tab */}
      {selectedTab === 1 && (
        <>
          <OrderCreatorDrawer
            open={openDrawer}
            onClose={handleDrawerClose}
            setRowData={setRowData}
          />
          <OrderManagementContainer rowData={rowData} />
        </>
      )}

      {selectedTab === 0 && (
        <div style={{ padding: "20px" }}>
          <Typography variant="h4">Welcome to the Home Page</Typography>
          {/* Add more content as needed */}
        </div>
      )}

      {selectedTab === 2 && (
        <div style={{ padding: "20px" }}>
          <Typography variant="h4">Accounting Page</Typography>
          {/* Add more content as needed */}
        </div>
      )}
    </>
  );
};

export default Header;
