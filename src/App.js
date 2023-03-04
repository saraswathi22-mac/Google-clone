import Home from "./google_pages/Home";
import SearchPage from "./google_pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="clone">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/"  element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
