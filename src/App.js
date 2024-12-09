import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GetStartedPage from "./pages/GetStartedPage";
import MarketplacePage from "./pages/MarketplacePage";
import BuyersPage from "./pages/BuyersPage";
import CollaboratePage from "./pages/CollaboratePage";
import LoginPage from "./pages/LoginPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header user={user} setUser={setUser} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/buyers" element={<BuyersPage />} />
            <Route path="/collaborate" element={<CollaboratePage />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
