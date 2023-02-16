import { BASE_URL } from "../api/consts";
import { CreateCollectionDTO } from "../collection/interfaces";
import { CreateRemarkDTO } from "../remarks/interfaces";

export function fetchCollections(userId: string) {
  return fetch(`${BASE_URL}/collections/all/${userId}`);
}

export function fetchCollection(collectionId: string) {
  return fetch(`${BASE_URL}/collections/${collectionId}`);
}

export function fetchRemarks(collectionId: string) {
  return fetch(`${BASE_URL}/remarks/collection/${collectionId}`);
}

export function fetchRemark(remarkId: string) {
  return fetch(`${BASE_URL}/remarks/${remarkId}`);
}

export function createCollection(data: CreateCollectionDTO) {
  return fetch(`${BASE_URL}/collections`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function createRemark(data: CreateRemarkDTO) {
  return fetch(`${BASE_URL}/remarks`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
