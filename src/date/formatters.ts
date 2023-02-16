export function formatDate(dateIsoString: string) {
  return new Date(dateIsoString).toLocaleDateString();
}
