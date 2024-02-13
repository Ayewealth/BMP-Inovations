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
  // const [loading, setLoading] = useState(true);
  const [loginMsg, setLoginMsg] = useState("");

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
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
      console.log("User Created");
    } else {
      alert("Error: " + response.status);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
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
      console.log("User Login");
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

  // const updateToken = async () => {
  //   console.log("Token Updated");
  //   let response = await fetch("http://127.0.0.1:8000/api/login/refresh/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ refresh: authTokens?.refresh }),
  //   });
  //   const data = await response.json();

  //   if (response.status === 200) {
  //     setAuthTokens(data);
  //     setUser(jwtDecode(data.access));
  //     localStorage.setItem("authTokens", JSON.stringify(data));
  //   } else {
  //     logoutUser();
  //   }

  //   if (loading) {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (loading) {
  //     updateToken();
  //   }
  //   const mins = 1000 * 60 * 4;
  //   const interval = setInterval(() => {
  //     if (authTokens) {
  //       updateToken();
  //     }
  //   }, mins);
  //   return () => clearInterval(interval);
  // }, [authTokens, loading]);

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
