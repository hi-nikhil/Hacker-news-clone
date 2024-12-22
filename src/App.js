import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import TopStories from "./pages/TopStories";
import BestStories from "./pages/BestStories";
import NewStories from "./pages/NewStories";
import JobStories from "./pages/JobStories";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TopStories />} />
          <Route path="/best" element={<BestStories />} />
          <Route path="/new" element={<NewStories />} />
          <Route path="/jobs" element={<JobStories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
