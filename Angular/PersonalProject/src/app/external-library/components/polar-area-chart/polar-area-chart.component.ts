import { Component, OnInit } from '@angular/core';
import { Result, FilmInfo } from '../../interfaces/films.interface';
import { FilmsService } from '../../services/films.service';
import { switchMap, map, merge } from 'rxjs';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss'],
})
export class PolarAreaChartComponent implements OnInit {
  higuerEarningMovies!: Result[];

  earnings: number[] = [];
  budgets: number[] = [];
  filmNames: string[] = [];

  data: any;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    // this.filmsService.getHiguerEarningMovies().subscribe((movies) => {
    //   this.higuerEarningMovies = movies.results.slice(0, 10);
    //   for (let film of this.higuerEarningMovies) {
    //     this.filmsService.getMovie(film.id).subscribe((movie) => {
    //       this.earnings.push(movie.revenue);
    //       this.filmNames.push(movie.title);
    //       this.budgets.push(movie.budget);
    //     });
    //   }
    // });

    this.filmsService
      .getHiguerEarningMovies()
      .pipe(
        switchMap((movies) => {
          const moviesObservable = movies.results
            .slice(0, 10)
            .map((movie: any) => {
              return this.filmsService.getMovie(movie.id);
            });
          return merge(...moviesObservable);
        })
      )
      .subscribe((movie) => {
        this.earnings.push(movie.revenue);
        this.filmNames.push(movie.title);
        this.budgets.push(movie.budget);
      });

    setTimeout(() => {
      this.data = {
        labels: this.filmNames,
        datasets: [
          {
            label: 'Films revenue',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: this.earnings,
          },
          {
            label: 'Films budget',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: this.budgets,
          },
        ],
      };
    }, 1000);
  }
}
