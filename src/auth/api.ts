import { BASE_URL } from "../api/consts";

export function fetchCollections(userId: string) {
  return fetch(`${BASE_URL}/collections/${userId}`);
}
