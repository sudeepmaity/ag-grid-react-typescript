import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./DashBoard";
import SelectFiles from "./SelectFiles";
import OMLeftNav from "./OMLeftNav";
import OMNavFileInfo from "./OMNavFileInfo";
import { Box } from "@mui/material";
import { OrderType, SummaryType } from "./types";

const OrderManagementContent = () => {
  const location = useLocation();
  const orderData = location.state as OrderType | null;
  const [isLeftNavVisible, setIsLeftNavVisible] = useState(true);

  const summaryInfo: SummaryType = {
    calculatedGross: "$1000",
    reportedNet: "$900",
    calculatedNet: "$850",
    netDifference: "$50",
    accountNo: "987654321",
    split: "50/50",
    costCenter: "11234",
  };

  if (!orderData) {
    return <Dashboard />;
  }

  return (
    <Box display="flex" height="100%">
      {/* Left Navigation */}
      <OMLeftNav
        isVisible={isLeftNavVisible}
        onCollapse={() => setIsLeftNavVisible(false)}
        onExpand={() => setIsLeftNavVisible(true)}
      >
        <OMNavFileInfo orderInfo={orderData} summaryInfo={summaryInfo} />
      </OMLeftNav>

      {/* Main Content */}
      <Box flex={1} sx={{ padding: 2 }}>
        <SelectFiles orderData={orderData} />
      </Box>
    </Box>
  );
};

export default OrderManagementContent;
