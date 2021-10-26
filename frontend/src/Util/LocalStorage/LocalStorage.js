export class LocalStorage {
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  setItem(key, data) {
    localStorage.setItem(key, data);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorage();
