import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import LiveCasino from "./pages/Live-Casino.js";
import Slots from "./pages/Slots.js";
import Bingo from "./pages/Bingo.js";
import FishingGames from "./pages/Fishing-Games.js";
import Affiliate from "./pages/Affiliate.js";
import Promotion from "./pages/Promotion.js";
import Blogs from "./pages/Blogs.js";
import BlogPosts from "./pages/BlogPosts.js";
import NotFound from "./pages/404.js";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-LS10DDRSPV";
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LS10DDRSPV');
      `;
      document.head.appendChild(script2);

      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      };
    }
  }, [location.pathname]);

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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPosts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
