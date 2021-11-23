import { makeAutoObservable } from "mobx";
import axios from "axios";
import AuthService from "../services/AuthService";
import { API_URL } from "../http";

export default class Store {
  user = {};
  isAuth = false;
  email = "";
  id = "";
  constructor() {
    makeAutoObservable(this);
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
  
  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      this.setToken(response);
      return true;
    } catch (e) {
      return e;
    }
  }

  async registration(login, email, password) {
    try {
      const response = await AuthService.registration(login, email, password);
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
}
