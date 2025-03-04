import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import ResultsPage from "./pages/ResultsPage";
import Hiragana from "./pages/Hiragana/hiragana";
import Katakana from "./pages/Katakana/katakana";
import Kanji from "./pages/Kanji/kanji";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/hiragana" element={<Hiragana />} />
          <Route path="/katakana" element={<Katakana />} />
          <Route path="/kanji" element={<Kanji />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
