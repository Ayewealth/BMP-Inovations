import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import { ThemeProvider } from "./context/ThemeContext";
import FloatingButton from "./components/common/FloatingButton";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/register" element={<SignUp />} />
              <Route path="/login" element={<Signin />} />

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />

              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element />
              </Route>
            </Routes>
            <FloatingButton />
          </ThemeProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
