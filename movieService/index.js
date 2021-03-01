import axios from 'axios'

class movieService {
  apikey;
  constructor() {
    this.apikey = '8f1c492cd3397a54d047fb0ae2692868';
  }
  getMovie(id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}`)
  }
  getTrending() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apikey}`);
  }
}

export default new movieService()