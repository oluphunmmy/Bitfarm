import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignupPage from "./components/Auth/SignupPage";
import LoginPage from "./components/Auth/LoginPage";
import HomePage from "./pages/HomePage";
import GetStartedPage from "./pages/GetStartedPage";
import BuyersPage from "./pages/BuyersPage";
import AIConsultationPage from "./pages/AIConsultationPage";
import MarketplacePage from "./pages/MarketplacePage";
import CollaboratePage from "./pages/CollaboratePage";
import { initialUsers } from "./utils/initialUsers";
import { getAgriculturalInsight } from "./utils/api";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [aiInsight, setAiInsight] = useState("");

  const navigateTo = (page) => setCurrentPage(page);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    navigateTo("dashboard");
  };

  const handleSignup = (newUser) => {
    const userWithId = { ...newUser, id: users.length + 1 };
    setUsers((prevUsers) => [...prevUsers, userWithId]);
    setIsLoggedIn(true);
    setCurrentUser(userWithId);
    navigateTo("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigateTo("home");
  };

  useEffect(() => {
    getAgriculturalInsight("sustainable farming").then(setAiInsight);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />;
      case "get-started":
        return <GetStartedPage navigateTo={navigateTo} />;
      case "login":
        return (
          <LoginPage
            users={users}
            onLogin={handleLogin}
            navigateTo={navigateTo}
          />
        );
      case "signup":
        return <SignupPage onSignup={handleSignup} navigateTo={navigateTo} />;
      case "buyers":
        return <BuyersPage navigateTo={navigateTo} />;
      case "ai-consultation":
        return <AIConsultationPage navigateTo={navigateTo} />;
      case "marketplace":
        return <MarketplacePage navigateTo={navigateTo} />;
      case "collaborate":
        return <CollaboratePage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="font-sans max-w-4xl mx-auto p-4">
      <Header
        isLoggedIn={isLoggedIn}
        user={currentUser}
        navigateTo={navigateTo}
        onLogout={handleLogout}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
