import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import LiveCasino from "./pages/Live-Casino.js";
import Slots from "./pages/Slots.js";
import Bingo from "./pages/Bingo.js";
import FishingGames from "./pages/Fishing-Games.js";
import Affiliate from "./pages/Affiliate.js";
import Promotion from "./pages/Promotion.js";
import NotFound from "./pages/404.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/live-casino" element={<LiveCasino />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/bingo" element={<Bingo />} />
        <Route path="/fishing-games" element={<FishingGames />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
