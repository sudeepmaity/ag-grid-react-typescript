// App.tsx or index.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import OrderManagementContent from "./OrderManagementContent";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/order-management" element={<OrderManagementContent />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
