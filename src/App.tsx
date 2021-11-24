import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import FrontEnd from "./Pages/FrontEnd";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="headerWrapper">
        <Header />
      </div>

      <main>
        <Grid container style={{ marginTop: "5%", padding: "25px", display: "left" }}>
          <Grid item xs={12} md={12}>
            <Routes>
              <Route path="*" element={<HomePage />}></Route>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="home" element={<HomePage />}></Route>
              <Route path="frontend" element={<FrontEnd />}></Route>
            </Routes>
          </Grid>
        </Grid>
      </main>

      <div className="footerWrapper">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
