import React, { useContext, useState, useEffect } from "react";
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
import { IntlProvider } from "react-intl";
import Russian from "./languages/ru.json";
import English from "./languages/en.json";
import { observer } from "mobx-react-lite";

function App() {
  const { store } = useContext(Context);
  
  const [language, setLanguage] = useState(store.locale === "ru-RU" ? Russian : English);

  useEffect(() => {
    console.log('test1')
    if (store.locale === "ru-RU") setLanguage(Russian);
    else setLanguage(English);
  }, [store.locale]);


  console.log('test')
  
  return (
    <IntlProvider locale={store.locale} messages={language}>
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
    </IntlProvider>
  );
}

export default observer(App);
