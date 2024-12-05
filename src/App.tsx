import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { BooksPage } from "./pages/BooksPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { BookDetailsPage } from "./components/BookDetailsPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="flex flex-1 pt-16">
          <div className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<BooksPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/books/:id" element={<BookDetailsPage />} />
            </Routes>
          </div>

          <Sidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
