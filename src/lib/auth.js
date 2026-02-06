const REQUIRED_DATE = "2025-02-25";
const STORAGE_KEY = "proposal_auth";

export function isAuthed() {
  return localStorage.getItem(STORAGE_KEY) === "1";
}

export function loginWithDate(dateStr) {
  if (!dateStr) return false;
  if (dateStr === REQUIRED_DATE) {
    localStorage.setItem(STORAGE_KEY, "1");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export { REQUIRED_DATE };
