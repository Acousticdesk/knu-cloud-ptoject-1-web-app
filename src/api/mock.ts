import { AuthDTO } from "./auth/api-auth.interfaces";

export function signIn(data: AuthDTO) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({});
    }, 1000);
  });
}

export function createNewCollectionMock() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id: 1,
        name: "New Collection",
        description: "A collection for testing purposes",
      });
    }, 1000);
  });
}
