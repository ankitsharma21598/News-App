import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { NewsProvider } from "./context/NewsContext";
import NewsDetail from "./pages/NewsDetail";
import FavoritePage from "./pages/FavoritePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <NewsProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Navbar/>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/news/:id"
              element={
                <ProtectedRoute>
                  <Navbar/>
                  <NewsDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Navbar/>
                  <FavoritePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </NewsProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
