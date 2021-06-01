import axios from 'axios'
import { API_URL, BASE_PARAMS } from './config'

// Movie has more fields but we don't need them
export interface PopularMovie {
  id: number
  original_title: string
  poster_path: string
  // ...
}

interface PopularMoviesParams {
  page: number
}

interface PopularMoviesResponse {
  page: number
  results: PopularMovie[]
  total_pages: number
  total_results: number
}

export async function getPopularMovies(
  params?: PopularMoviesParams
): Promise<PopularMoviesResponse> {
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

// MovieDetails has more fields but we don't need them
export interface Movie {
  id: number
  original_title: string
  backdrop_path: string
  genres: Array<{ id: number; name: string }>
  release_date: string
  runtime: number
  vote_average: number
  vote_count: number
  overview: string
  // ...
}

export async function getMovieDetails(id: number | string): Promise<Movie> {
  const response = await axios({
    url: `${API_URL}/movie/${id}`,
    method: 'GET',
    params: BASE_PARAMS
  })

  return response.data
}
