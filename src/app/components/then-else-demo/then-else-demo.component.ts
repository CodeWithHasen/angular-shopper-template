import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-then-else-demo',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './then-else-demo.component.html',
  styleUrl: './then-else-demo.component.css'
})
export class ThenElseDemoComponent {

}
