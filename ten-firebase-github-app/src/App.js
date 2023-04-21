import { useState } from "react";
import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// React Router Dom
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Firebase
import firebase from "firebase/app";
import "firebase/auth";

// Components
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

import { UserContext } from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
