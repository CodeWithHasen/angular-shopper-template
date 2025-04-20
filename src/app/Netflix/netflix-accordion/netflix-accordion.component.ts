import { Component } from '@angular/core';

@Component({
  selector: 'app-netflix-accordion',
  standalone: true,
  templateUrl: './netflix-accordion.component.html',
  styleUrls: ['./netflix-accordion.component.css']
})
export class NetflixAccordionComponent {
  openItem: string | null = null;

  accordionData = [
    { id: 'wit', question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers award-winning TV shows, movies, anime, and more...' },
    { id: 'hmdtc', question: 'How much does Netflix cost?', answer: 'Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.' },
    { id: 'wciw', question: 'Where can I watch?', answer: 'Watch anywhere, anytime on smart TVs, smartphones, tablets, and more.' },
    { id: 'hdic', question: 'How do I cancel?', answer: 'No commitments. Cancel anytime online in two clicks. No cancellation fees.' },
    { id: 'wciwon', question: 'What can I watch on Netflix?', answer: 'Netflix has a vast library of movies, TV shows, anime, and award-winning originals.' },
    { id: 'ingfk', question: 'Is Netflix good for kids?', answer: 'Yes! Netflix Kids provides parental controls and family-friendly content.' }
  ];

  toggleItem(id: string) {
    this.openItem = this.openItem === id ? null : id;
  }
}
