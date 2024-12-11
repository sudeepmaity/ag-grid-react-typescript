// App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import OrderManagementContent from "./OrderManagementContent";
import { OrderInfoProvider } from "./hooks/OrderInfoContext";

const App: React.FC = () => {
  return (
    <Router>
      <OrderInfoProvider>
        <Header />
        <Routes>
          <Route
            path="/order-management"
            element={<OrderManagementContent />}
          />
          {/* Add other routes as needed */}
        </Routes>
      </OrderInfoProvider>
    </Router>
  );
};

export default App;
