import { BASE_URL } from "../api/consts";

export function fetchCollections(userId: string) {
  return fetch(`${BASE_URL}/collections/all/${userId}`);
}

export function fetchCollection(collectionId: string) {
  return fetch(`${BASE_URL}/collections/${collectionId}`);
}

export function fetchRemarks(collectionId: string) {
  return fetch(`${BASE_URL}/remarks/collection/${collectionId}`);
}
