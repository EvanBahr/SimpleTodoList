import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tugas from "./components/tugas";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Tugas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
