import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PastEvents from "./pages/PastEvents";
function App() {
  return (
    <Router>
      <div className="parent-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/past-events" element={<PastEvents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
