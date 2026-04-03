import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceGallery from "./pages/SpaceGallery.jsx";
import Details from "./pages/Details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpaceGallery />} />
        <Route path="/details/:date" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;