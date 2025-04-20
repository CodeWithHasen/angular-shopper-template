import { Component } from '@angular/core';
import { NetflixDropdownComponent } from '../netflix-dropdown/netflix-dropdown.component';

@Component({
  selector: 'app-netflix-footer',
  imports: [NetflixDropdownComponent],
  templateUrl: './netflix-footer.component.html',
  styleUrl: './netflix-footer.component.css'
})
export class NetflixFooterComponent {

}
