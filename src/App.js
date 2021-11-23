import React, { useContext } from "react";
import { Context } from ".";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Header from "./components/header/Header";
import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegistrationForm";
import MainPage from "./components/mainPage/MainPage";

function App() {
  const { store } = useContext(Context);
  return (
    <Router>
      <Paper
        elevation={0}
        style={{
          background: "#e6e6eb",
          minHeight: "100vh",
          width: "100%",
        }}>
        <Header></Header>
          <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path="/login" element={<LoginForm/>}/>
            <Route exact path="/registration" element={<RegistrationForm/>}/>
          </Routes>
      </Paper>
    </Router>
  );
}

export default App;
