import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import OrderCreatorDrawer from "./OrderCreatorDrawer";
import OMLeftNav from "./OMLeftNav";
import OMNavFileInfo from "./OMNavFileInfo";
import { OrderType } from "./types";

const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 0: Home, 1: Order Management, 2: Accounting
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [orderInfo, setOrderInfo] = useState<OrderType>({
    firmName: "N/A",
    orderDate: "N/A",
    lockboxNumber: "N/A",
    batchReferenceNumber: "N/A",
    noOfChecks: "N/A",
  });

  const [gridData, setGridData] = useState<OrderType[]>([]); // State to populate AGrid

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleOrderCreated = (newOrder: OrderType) => {
    setOrderInfo(newOrder);
    setGridData((prev) => [...prev, newOrder]); // Add the new order to grid data
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

      {/* Order Management Tab */}
      {selectedTab === 1 && (
        <>
          <OMLeftNav
            isVisible={isLeftPanelVisible}
            onCollapse={() => setIsLeftPanelVisible(false)}
            onExpand={() => setIsLeftPanelVisible(true)}
          >
            <OMNavFileInfo
              orderInfo={orderInfo}
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
        </>
      )}

      {/* Accounting Tab */}
      {selectedTab === 2 && (
        <div style={{ padding: "20px" }}>
          <h2>Accounting Page</h2>
          <p>Content for the Accounting tab goes here.</p>
        </div>
      )}

      {/* Order Creator Drawer */}
      <OrderCreatorDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOrderCreated={handleOrderCreated}
      />
    </>
  );
};

export default Header;
