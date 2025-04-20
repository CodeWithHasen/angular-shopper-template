import { Component } from '@angular/core';

@Component({
  selector: 'app-netflix-cards',
  standalone: true,
  templateUrl: './netflix-cards.component.html',
  styleUrls: ['./netflix-cards.component.css']
})
export class NetflixCardsComponent {
  cardData = [
    {
      img: '/assets/images/nf-card1.PNG',
      title: 'Enjoy on your TV',
      description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
    },
    {
      img: '/assets/images/nf-card2.PNG',
      title: 'Download your shows to watch offline',
      description: 'Save your favourites easily and always have something to watch.'
    },
    {
      img: '/assets/images/nf-card3.PNG',
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.'
    },
    {
      img: '/assets/images/nf-card4.PNG',
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.'
    }
  ];
}
