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
    userId: null,
    setUserId,
  });

  function setUserId(id: UserId) {
    setAuthState((state) => ({
      ...state,
      id,
    }));
  }

  return (
    <AuthContextProvider value={authState}>
      {cloneElement(children as ReactElement, authState)}
    </AuthContextProvider>
  );
}
