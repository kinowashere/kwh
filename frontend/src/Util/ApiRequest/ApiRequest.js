import axios from 'axios';
import { API_ROUTE, API_URL, API_VERSION } from 'Config/Environment';
import { isSignedIn } from 'Util/Auth';
import SessionStorage from 'Util/SessionStorage';

export class ApiRequest {
  constructor() {
    this.headers = isSignedIn() ? { Authorization: `Bearer ${SessionStorage.getItem('token')}` } : {};
    this.axiosClient = axios.create({
      baseURL: `${API_URL}/${API_ROUTE}/v${API_VERSION}`,
      headers: this.headers
    });
  }

  handleError(error) {
    const { response } = error;
    return response;
  }

  get(path, config = {}) {
    return this.axiosClient.get(path, config)
      .catch((error) => this.handleError(error));
  }

  post(path, config = {}) {
    return this.axiosClient.post(path, config)
      .catch((error) => this.handleError(error));
  }

  put(path, config = {}) {
    return this.axiosClient.put(path, config)
      .catch((error) => this.handleError(error));
  }

  delete(path, config = {}) {
    return this.axiosClient.delete(path, config)
      .catch((error) => this.handleError(error));
  }
}

export default ApiRequest;
