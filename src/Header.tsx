// Header.tsx
import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderCreateContainer from "./OrderCreateContainer";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/order-management");
    } else if (newValue === 2) {
      navigate("/accounting");
    }
  };

  const handleOrderCreated = (newOrder: any) => {
    setOrderData(newOrder);
    setOpenDrawer(false);
    // Navigate to /order-management with state
    navigate("/order-management", { state: newOrder });
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
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
          {selectedTab === 1 && (
            <Button color="inherit" onClick={() => setOpenDrawer(true)}>
              Create New Order
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* Order Create Container Drawer */}
      <OrderCreateContainer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOrderCreated={handleOrderCreated}
      />
    </>
  );
};

export default Header;
