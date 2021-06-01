import axios from 'axios'
import { API_URL, BASE_PARAMS } from './config'

export async function getPopularMovies(params) {
  const response = await axios({
    url: `${API_URL}/movie/popular`,
    method: 'GET',
    params: {
      ...params,
      ...BASE_PARAMS
    }
  })

  return response.data
}

export async function getMovieDetails(id) {
  const response = await axios({
    url: `${API_URL}/movie/${id}`,
    method: 'GET',
    params: BASE_PARAMS
  })

  return response.data
}
