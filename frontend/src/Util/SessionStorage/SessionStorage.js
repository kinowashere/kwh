export class SessionStorage {
  getItem(key) {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  }

  setItem(key, data) {
    sessionStorage.setItem(key, data);
  }

  removeItem(key) {
    sessionStorage.removeItem(key);
  }
}

export default new SessionStorage();
