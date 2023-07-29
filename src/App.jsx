import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => {
  // State variable to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Show the Dashboard component only if the user is authenticated */}
        {isAuthenticated ? (
          <Route
            path="/"
            element={<Dashboard onLogin={() => setIsAuthenticated(false)} />}
          />
        ) : (
          // Show the Login component if the user is not authenticated
          <Route
            path="/"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
