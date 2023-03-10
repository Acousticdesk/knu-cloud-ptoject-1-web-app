import { createContext } from "react";
import { UserId } from "./auth.interface";

const initialValue: { userId: UserId; setUserId: (id: UserId) => void } = {
  userId: "",
  setUserId: () => {},
};

export const authContext = createContext(initialValue);
