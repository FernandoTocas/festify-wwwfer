"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/screens/Home";
import PageNotFound from "@/screens/PageNotFound";
import Artists from "./screens/Artists";
import ArtistDetail from "./screens/ArtistDetail";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:artistId" element={<ArtistDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

// Enpoints