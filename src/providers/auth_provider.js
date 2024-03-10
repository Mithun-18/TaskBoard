import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { USER_ID_COOKIE_KEY, USER_NAME_COOKIE_KEY } from "../constants";
import http from "../services/http";
import { USER_LOGIN_ENDPOINT } from "../services/constants";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLoogedIn();
  }, []);

  async function checkLoogedIn() {
    setLoading(true);
    let userId = Cookies.get(USER_ID_COOKIE_KEY);
    let userName = Cookies.get(USER_NAME_COOKIE_KEY);

    if (
      typeof userId == "string" &&
      userId != "" &&
      typeof userName == "string" &&
      userName != ""
    ) {
      setUser({
        userId,
        userName,
      });
    } else {
      Cookies.remove(USER_ID_COOKIE_KEY);
      Cookies.remove(USER_NAME_COOKIE_KEY);
      setUser(null);
    }

    setLoading(false);
  }

  function logIn(userName, password, onSuccess) {
    http
      .post(USER_LOGIN_ENDPOINT, {
        userName,
        password,
      })
      .then((result) => {
        const { data } = result;
        let userId = data?.data?.userid || "";
        let userName = data?.data?.username || "";

        Cookies.set(USER_ID_COOKIE_KEY, userId);
        Cookies.set(USER_NAME_COOKIE_KEY, userName);
        setUser({
          userId,
          userName,
        });
        onSuccess();
      })
      .catch((error) => {
        alert(error?.response?.data?.data || "Something went wrong!");
      });
  }

  function logout(onSuccess) {
    Cookies.remove(USER_ID_COOKIE_KEY);
    Cookies.remove(USER_NAME_COOKIE_KEY);
    setUser(null);
    onSuccess?.();
  }

  function isLoggedIn() {
    return Boolean(user);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logout, loading, setUser, logIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const value = useContext(AuthContext);
  return value;
}
