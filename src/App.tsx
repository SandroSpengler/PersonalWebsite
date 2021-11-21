import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="headerWrapper">
        <Header />
      </div>

      <main>
        <Grid container columnSpacing={{ xs: 0, sm: 2, lg: 4 }} justifyContent="center" style={{ marginTop: "5%" }}>
          <Grid item xs={0} md={2.5}></Grid>
          <Grid item xs={10} md={7}>
            <Routes>
              <Route path="*" element={<HomePage />}></Route>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="home" element={<HomePage />}></Route>
            </Routes>
          </Grid>
          <Grid item xs={0} md={2.5}></Grid>
        </Grid>
      </main>

      <div className="footerWrapper">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
