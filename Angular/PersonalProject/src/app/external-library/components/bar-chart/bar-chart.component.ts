import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/films.interface';

import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  higuerEarningMovies!: Result[];

  earnings: number[] = [];
  budgets: number[] = [];
  filmNames: string[] = [];
  basicData: any;

  data: any;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.filmsService.getHiguerEarningMovies().subscribe((movies) => {
      this.higuerEarningMovies = movies.results.slice(0, 10);
      for (let film of this.higuerEarningMovies) {
        this.filmsService.getMovie(film.id).subscribe((movie) => {
          this.earnings.push(movie.revenue);
          this.filmNames.push(movie.title);
          this.budgets.push(movie.budget);
        });
      }
    });

    setTimeout(() => {
      this.basicData = {
        labels: this.filmNames,
        datasets: [
          {
            label: 'Films revenue',
            backgroundColor: '#42A5F5',
            data: this.earnings,
          },
          {
            label: 'Films budget',
            backgroundColor: '#FFA726',
            data: this.budgets,
          },
        ],
      };

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
    }, 100);
  }
}
