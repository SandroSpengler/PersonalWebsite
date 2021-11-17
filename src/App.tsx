import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="headerWrapper">
        <Header />
      </div>

      <main>
        <Routes>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
        </Routes>
      </main>

      <div className="footerWrapper">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
