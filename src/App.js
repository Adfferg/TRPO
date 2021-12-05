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
import { ThemeProvider, createTheme  } from "@material-ui/core/styles";
import EventCreation from "./components/event/EventCreation";

function App() {
  const { store } = useContext(Context);
  
  const [language, setLanguage] = useState(store.locale === "ru-RU" ? Russian : English);

  useEffect(() => {
    if (store) {
      if (localStorage.getItem("token")) {
        store.checkAuth();
      }
      else {
        store.setRefreshed(true);
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

  const mainTheme = createTheme({
    palette: {
      type: "light",
    },
    gridColor: "white",
    headerColor: "#8f3525",
    border: "2px solid #8f3525",
    thinBorder: "1px solid #8f3525",
    containerColor:"rgb(209,209,209)"
  });

  return (
    <IntlProvider locale={store.locale} messages={language}>
      <ThemeProvider theme={mainTheme}>
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
                <Route exact path="/make-order" element={<EventCreation/>}></Route>
              </Routes>
          </Paper>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default observer(App);
