"use client";
import { Provider } from "react-redux";
import { store } from "../libs/store";

export default function UserProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
