export class Jwt {
  constructor(header, payload, signature) {
    this.header = header;
    this.payload = payload;
    this.signature = signature;
  }

  static getJwtFromToken(token) {
    const jwtArray = token.split('.');
    const header = JSON.parse(atob(jwtArray[0]));
    const payload = JSON.parse(atob(jwtArray[1]));
    const signature = jwtArray[2];
    return new Jwt(header, payload, signature);
  }
}

export default Jwt;
