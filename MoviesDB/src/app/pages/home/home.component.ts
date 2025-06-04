import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { AutoScrollDirective } from '../../directives/auto-scroll.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AutoScrollDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: MovieApiService) { }

  bannerResults: any = [];
  trendingMovieResults: any = [];
  trendingSerieResults: any = [];
  popularActionMovieResults: any = [];
  trendingAnimationMovieResults: any = [];
  trendingAnimationSerieResults: any = [];


  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.trendingSerieData();
    this.popularActionMovieData();
    this.trendingAnimationMovieData();
    this.trendingAnimationSerieData();
  }

  // Consumo do serviço de banner
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      //console.log(results)
      this.bannerResults = result.results;
    });
  }

  // Filmes em Destaque
  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResults = result.results;
    })
  }

  // Séries em Destaque
  trendingSerieData() {
    this.service.trendingSerieApiData().subscribe((result) => {
      this.trendingSerieResults = result.results;
    })
  }

  // Filmes populares
  popularActionMovieData() {
    this.service.popularActionMovieApiData().subscribe((result) => {
      this.popularActionMovieResults = result.results;
    })
  }

  // Animações em Destaque
  trendingAnimationMovieData() {
    this.service.trendingAnimationMovieApiData().subscribe((result) => {
      console.log(result)
      this.trendingAnimationMovieResults = result.results;
    })
  }

  // Animações em Destaque
  trendingAnimationSerieData() {
    this.service.trendingAnimationSerieApiData().subscribe((result) => {
      this.trendingAnimationSerieResults = result.results;
    })
  }

}