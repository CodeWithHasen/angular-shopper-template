import { Component } from '@angular/core';

@Component({
  selector: 'app-netflix-carousel',
  standalone: true,
  templateUrl: './netflix-carousel.component.html',
  styleUrls: ['./netflix-carousel.component.css']
})
export class NetflixCarouselComponent {
  movieImages: string[] = [
    '/assets/images/nf-movie1.PNG',
    '/assets/images/nf-movie2.PNG',
    '/assets/images/nf-movie3.PNG',
    '/assets/images/nf-movie4.PNG',
    '/assets/images/nf-movie5.PNG',
    '/assets/images/nf-movie6.PNG',
    '/assets/images/nf-movie7.PNG',
    '/assets/images/nf-movie8.PNG',
    '/assets/images/nf-movie9.PNG',
    '/assets/images/nf-movie10.PNG'
  ];

  get groupedImages() {
    // Split into groups of 5
    const result: string[][] = [];
    for (let i = 0; i < this.movieImages.length; i += 5) {
      result.push(this.movieImages.slice(i, i + 5));
    }
    return result;
  }
}
