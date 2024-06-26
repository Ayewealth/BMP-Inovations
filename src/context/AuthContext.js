import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [loginMsg, setLoginMsg] = useState("");

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    console.log("Student Created");
    let response = await fetch("https://bmp-app.onrender.com/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();

    if (response.status === 201) {
      setLoginMsg("Account created successfully");
      navigate("/login");
      console.log(loginMsg);
    } else {
      alert("Error: " + response.status);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("User Login");
    let response = await fetch("https://bmp-app.onrender.com/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      setLoginMsg("Login successfully");
      navigate("/");
    } else {
      alert("Error: " + response.status);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const updateToken = async () => {
    console.log("Token Updated");
    let response = await fetch(
      "https://bmp-app.onrender.com/api/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      }
    );
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  useEffect(() => {
    const mins = 1000 * 60 * 4;
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, mins);
    return () => clearInterval(interval);
  }, [authTokens]);

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        user,
        registerUser,
        loginUser,
        logoutUser,
        loginMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
