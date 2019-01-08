export function saveToLocalStorage(key: "meetings" | "chat", value: string) {
  window.localStorage.setItem(key, value);
}

export function getFromToLocalStorage(key: "meetings" | "chat") {
  const value = window.localStorage.getItem(key) || "[]";

  return JSON.parse(value);
}
