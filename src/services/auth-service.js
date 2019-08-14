import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
//withCredentials mantiene las cookies del backend al frontend
    })
  }

  signup(user) {
    const { username, password } = user;
    console.log('Estoy en signup', username)
    return this.auth.post('/auth/signup', {username, password})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    console.log('Estoy en login', username)
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => {
        console.log(data)
         return data});
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const auth = new AuthService();

export default auth