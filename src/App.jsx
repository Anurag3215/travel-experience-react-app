import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddTravel from "./components/AddTravel";
import ViewActivity from "./components/ViewActivity";
import Navbar from "./components/Navbar";
import ViewTravel from "./components/ViewTravel";
import AddHotelreview from "./components/AddHotelreview";
import ViewHotelvreview from "./components/VieHotelvreview";
import AddAdventure from "./components/AddAdventure";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  return (
    <div className="app-shell">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Addexperience" element={<AddTravel />} />
        <Route path="/Viewexperience" element={<ViewTravel />} />
        <Route path="/addhotel" element={<AddHotelreview />} />
        <Route path="/viewhotel" element={<ViewHotelvreview />} />
        <Route path="/addadventure" element={<AddAdventure />} />
        <Route path="/viewadventure" element={<ViewActivity />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;