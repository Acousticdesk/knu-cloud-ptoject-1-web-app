import { ReactElement, useState, cloneElement, useEffect } from "react";
import { UserId } from "./auth.interface";
import { authContext } from "./auth.context";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  function setUserId(userId: UserId) {
    setAuthState((state) => ({
      ...state,
      userId,
    }));
  }

  useEffect(() => {
    const redirectPath = !authState.userId ? "/sign-in" : "/home";

    navigate(redirectPath);
  }, []);

  return (
    <AuthContextProvider value={authState}>
      {cloneElement(children as ReactElement, authState)}
    </AuthContextProvider>
  );
}
