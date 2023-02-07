import axios from 'axios';

const BASE_URL = 'http://api.themoviedb.org/3';
const API_KEY = '8f451d5cc6ee63c22b5aff4cdd29cef3';
// `http://api.themoviedb.org/3/trending/all/day?api_key=8f451d5cc6ee63c22b5aff4cdd29cef3`;

export const getTrend = () => {
  const data = axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const getMovie = query => {
  const data = axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return data;
};

export const getMovieDetails = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCredits = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMovieReview = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
