import { Component } from '@angular/core';
import { ShopperHeaderComponent } from "../shopper-header/shopper-header.component";
import { ShopperFooterComponent } from "../shopper-footer/shopper-footer.component";

@Component({
  selector: 'app-shopper-index',
  imports: [ShopperHeaderComponent, ShopperFooterComponent],
  templateUrl: './shopper-index.component.html',
  styleUrl: './shopper-index.component.css'
})
export class ShopperIndexComponent {

}
