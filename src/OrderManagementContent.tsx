// OrderManagementContent.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./DashBoard";
import SelectFiles from "./SelectFiles";
import { OrderType } from "./types";

const OrderManagementContent = () => {
  const location = useLocation();
  const orderData = location.state as OrderType | null;

  return !orderData ? <Dashboard /> : <SelectFiles orderData={orderData} />;
};

export default OrderManagementContent;
