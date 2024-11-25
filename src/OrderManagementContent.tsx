import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import SelectFiles from "./SelectFiles";
import OMLeftNav from "./OMLeftNav";
import OMNavFileInfo from "./OMNavFileInfo";
import { OrderType, SummaryType } from "./types";

const OrderManagementContent = () => {
  const location = useLocation();
  const orderData = location.state as OrderType | null;
  const [menuCollapsed, setMenuCollapse] = useState(false);

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
    <div style={{ display: "flex", height: "100%" }}>
      {/* Left Navigation */}
      <OMLeftNav
        menucollapsed={menuCollapsed}
        setMenuCollapse={setMenuCollapse}
        topMargin={64}
      >
        <OMNavFileInfo orderInfo={orderData} summaryInfo={summaryInfo} />
      </OMLeftNav>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "16px" }}>
        <SelectFiles orderData={orderData} />
      </div>
    </div>
  );
};

export default OrderManagementContent;
