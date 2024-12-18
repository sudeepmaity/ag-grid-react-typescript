// LeftNavLinks.tsx
//import { useOrderInfo } from 'hooks/OrderInfoContext';  // Adjust the path if needed
//import { getFileInfo } from '../../api/file/file-api';   // If this is a real API call
import { useOrderInfo } from "./hooks/OrderInfoContext";
import { OrderManagementOrderInfo } from "./LeftNavIcons";
import { NavLinkType } from "./NavLinkType";

export const OrderManagementLinks: NavLinkType[] = [
  {
    linkText: "Order Management Dashboard",
    path: "/order-management", // Ensure you have the correct route here
    icon: <OrderManagementOrderInfo />,
    expanded: false,
    testId: "OrderManagementDashboard",
    notification: "dot",
  },
];
