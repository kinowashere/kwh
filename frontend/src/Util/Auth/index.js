import SessionStorage from 'Util/SessionStorage';
import ApiRequest from 'Util/ApiRequest';
import Security from 'Util/Security';
import Jwt from 'Util/Jwt';

export const isSessionValid = () => {
  const token = SessionStorage.getItem('token');
  if (token) {
    return Jwt.getJwtFromToken(token).isTokenValid();
  }
  return false;
};

// eslint-disable-next-line arrow-body-style
export const isSignedIn = () => {
  return !!SessionStorage.getItem('isSignedIn') && isSessionValid();
};

/**
 * Saves User Info to the Session Storage.
 * The parameter must be the object, NOT a string.
 *
 * @param userInfo
 */
export function setUserInfo(userInfo) {
  SessionStorage.setItem('userInfo', JSON.stringify(userInfo));
}

export function getUserInfo() {
  return JSON.parse(SessionStorage.getItem('userInfo'));
}

export function signInUser(token) {
  SessionStorage.setItem('token', token);
  SessionStorage.setItem('isSignedIn', true);
  new ApiRequest().get('/user')
    .then((response) => {
      const { status, data } = response;
      if (status === 200) {
        setUserInfo(data);
      } else {
        Security.itsHackingTime();
      }
    });
}
