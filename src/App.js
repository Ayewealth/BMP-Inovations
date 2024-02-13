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
              <Route element={<PrivateRoute />}>
                <Route />
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
