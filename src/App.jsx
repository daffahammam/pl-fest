import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/index";
import Tables from "./pages/tables";
import Fixtures from "./pages/fixtures";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/fixtures" element={<Fixtures />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
