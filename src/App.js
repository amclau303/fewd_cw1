import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Index from "./components/Index";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Index />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
