import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

// views without layouts

import Index from "./views/Index";
import Team from "./page/Team";
import Layanan from "./page/Layanan";
import Tentang from "./page/Tentang";

function App() {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/team" element={<Team />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tentang" element={<Tentang />} />
        {/* add redirect for first page */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
