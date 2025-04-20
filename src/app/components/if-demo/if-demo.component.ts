import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-if-demo',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './if-demo.component.html',
  styleUrl: './if-demo.component.css'
})
export class IfDemoComponent {

}
