import { AuthDTO } from "./auth/api-auth.interfaces";

export function signIn(data: AuthDTO) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({});
    }, 1000);
  });
}
