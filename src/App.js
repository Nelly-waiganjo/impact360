import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProgramPage from "./pages/ProgramPage";
import EventsPage from "./pages/EventPage";
import ContactPage from "./pages/ContactPage";
import SubscriptionPlans from "./pages/SubscriptionPlans";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/subscription" element={<SubscriptionPlans />} />
      <Route path="/contact" element={<ContactPage />} />
      
    </Routes>
  );
}

