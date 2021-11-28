import React, { useContext, useState, useEffect } from "react";
import { Context } from ".";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Header from "./components/header/Header";
import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegistrationForm";
import MainPage from "./components/mainPage/MainPage";
import { IntlProvider } from "react-intl";
import Russian from "./languages/ru.json";
import English from "./languages/en.json";
import { observer } from "mobx-react-lite";
import CubeLoader from "./components/loaders/CubeLoader";
import UserProfile from "./components/user/UserProfile";
import backgroundImage from "./resources/light.png"
import Reviews from "./components/reviews/Reviews";

function App() {
  const { store } = useContext(Context);
  
  const [language, setLanguage] = useState(store.locale === "ru-RU" ? Russian : English);

  useEffect(() => {
    if (store) {
      if (localStorage.getItem("token")) {
        store.checkAuth();
      } 
    }
  }, [store]);

  useEffect(() => {
    if (store.locale === "ru-RU") setLanguage(Russian);
    else setLanguage(English);
  }, [store.locale]);
  
  if (store.isLoading) {
    return <CubeLoader></CubeLoader>;
  }

  return (
    <IntlProvider locale={store.locale} messages={language}>
      <Router>
        <Paper
          elevation={0}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            minHeight: "100vh",
            width: "100%",
          }}>
          <Header></Header>
            <Routes>
              <Route exact path="/" element={<MainPage/>}/>
              <Route exact path="/login" element={<LoginForm/>}/>
              <Route exact path="/registration" element={<RegistrationForm/>}/>
              <Route exact path="/reviews" element={<Reviews/>}/>
              <Route exact path="/profile/:id" element={<UserProfile/>}></Route>
              <Route exact path="/profile" element={<Navigate to = "/"/>}></Route>
            </Routes>
        </Paper>
      </Router>
    </IntlProvider>
  );
}

export default observer(App);
