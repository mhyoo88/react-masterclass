// const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const API_KEY = "08f2d66febaf93fecda39f7d7b1e1417";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
