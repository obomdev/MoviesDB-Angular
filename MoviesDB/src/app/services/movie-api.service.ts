import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }
  
  baseUrl = "https://api.themoviedb.org/3";
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTMyNWY0NWMzNWJkZGE1YzNkOGM2ZDIwYmY2YTQ1ZiIsIm5iZiI6MTc0NzQzMzQwMS40MzI5OTk4LCJzdWIiOiI2ODI3YjdiOTdjOWQyNzk4ZTlkYjFlYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PRbOZ3PP_xTzr9s9_PtVgjWGWY-TUauikxPIZDu5Z44'
    }
  };

  //Banner de mídias da semana
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }

  // Filmes em Destaque do Dia
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options)
  }

  // Séries em Destaque do Dia
  trendingSerieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options)
  }

  // Filmes de ação mais populares
  popularActionMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options)
  }
  // Filmes de ação mais populares
  trendingAnimationMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=16&sort_by=popularity.desc`, this.options)
  }
  // Filmes de ação mais populares
  trendingAnimationSerieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/tv?language=pt-br&with_genres=16&sort_by=popularity.desc`, this.options)
  }

  // Detalhes do Filme ou Série
  mediaDetails(type: any, value: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${type}/${value}?language=pt-br`, this.options);
  }

  // Trailers do Filme ou Série
  mediaTrailers(type: any, value: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${type}/${value}/videos?language=pt-br`, this.options);
  }

  // Elenco do Filme ou Série
  mediaCast(type: any, value: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${type}/${value}/credits?language=pt-br`, this.options);
  }

}
