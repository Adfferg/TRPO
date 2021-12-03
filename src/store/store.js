import { makeAutoObservable } from "mobx";
import axios from "axios";
import AuthService from "../services/AuthService";
import { API_URL } from "../http";
import ProfileService from "../services/ProfileService";
export default class Store {
  user = {};
  isAuth = false;
  email = "";
  id = "";
  locale = "ru-RU";
  refreshed = false;
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
    if (localStorage.getItem("locale")) {
      this.locale = localStorage.getItem("locale");
    } else this.locale = navigator.language;
  }

  setLocale() {
    if (this.locale === "ru-RU") this.locale = "en-US";
    else this.locale = "ru-RU";
    localStorage.setItem("locale", this.locale);
  }
  setAuth(isAuth) {
    this.isAuth = isAuth;
  }
  setUser(user) {
    this.user = user;
  }
  setEmail(email) {
    this.email = email;
  }
  setId(id) {
    this.id = id;
  }
  setToken(response) {
    localStorage.setItem("token", response.data.accessToken);
    this.setEmail(response.data.user.email);
    this.setId(response.data.user.id);
    this.setAuth(true);
    this.setUser(response.data.user);
  }
  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }
  setRefreshed(refreshed) {
    this.refreshed = refreshed;
  }
  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      this.setToken(response);
      return true;
    } catch (e) {
      return e;
    }
  }

  async registration(email, password,name,surname) {
    try {
      const response = await AuthService.registration(email, password,name,surname);
      this.setToken(response);
      return true;
    } catch (e) {
      return e;
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({});
      this.setEmail("");
      this.setId("");
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
  async checkAuth() {
    this.setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      this.setToken(response);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      this.setIsLoading(false);
      this.setRefreshed(true);
    }
  }

  async sendActivationLink() {
    try {
      if (this.user) await ProfileService.sendActivationLink(this.user.email);
    } catch (e) {
      return e;
    }
  }
}
