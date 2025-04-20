import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductContract } from '../../contracts/ProductContract';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  public Product:ProductContract = {
    Name: "",
    Price: 0,
    Stock: false,
    City: "Select City"
  }
  public UpdatedProduct: ProductContract = {
    Name: "",
    Price: 0,
    Stock: false,
    City: ""
  }
  public UpdateClicked():void {
    this.UpdatedProduct = {
      Name : this.Product.Name,
      Price : this.Product.Price,
      Stock : this.Product.Stock,
      City : this.Product.City
    }
  }
}
