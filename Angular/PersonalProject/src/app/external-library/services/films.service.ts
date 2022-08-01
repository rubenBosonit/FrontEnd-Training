import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, FilmInfo } from '../interfaces/films.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  apiKey: string = '88e404613bdd280a2336405e15511c17';
  constructor(private http: HttpClient) {}

  getHiguerEarningMovies(): Observable<FilmInfo> {
    return this.http.get<FilmInfo>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&sort_by=revenue.desc`
    );
  }

  getMovie(movieId: number): Observable<Film> {
    return this.http.get<Film>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`
    );
  }
}
