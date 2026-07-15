import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddTravel from "./components/AddTravel";
import ViewActivity from "./components/ViewActivity";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTravel />} />
        <Route path="/View-act" element={<ViewActivity />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;