import decode from "jwt-decode";
import { getToken } from "./authentication";

export const decodeToken = () => {
  const token = getToken();
  const info = token ? decode(token) : null; // If token in Local Storage decode else return null
  return info;
};

export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};
