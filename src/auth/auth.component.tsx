import { ReactElement, useState, cloneElement } from "react";
import { UserId } from "./auth.interface";
import { authContext } from "./auth.context";

interface AuthComponentProps {
  children: ReactElement;
}

interface AuthComponentState {
  userId: UserId;
  setUserId: (id: UserId) => void;
}

const { Provider: AuthContextProvider } = authContext;

export function Auth({ children }: AuthComponentProps) {
  const [authState, setAuthState] = useState<AuthComponentState>({
    userId: "",
    setUserId,
  });

  function setUserId(userId: UserId) {
    setAuthState((state) => ({
      ...state,
      userId,
    }));
  }

  return (
    <AuthContextProvider value={authState}>
      {cloneElement(children as ReactElement, authState)}
    </AuthContextProvider>
  );
}
