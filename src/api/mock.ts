import { AuthDTO } from "./auth/api-auth.interfaces";
import { CreateCollectionDTO } from "../collection/interfaces";
import { CreateRemarkDTO } from "../remarks/interfaces";

export function signIn(data: AuthDTO) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({});
    }, 1000);
  });
}

export function createNewCollectionMock(data: CreateCollectionDTO) {
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

export function createNewRemarkMock(data: CreateRemarkDTO) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id: 1,
        name: "New Remark",
        description: "A remark for testing purposes",
      });
    }, 1000);
  });
}
