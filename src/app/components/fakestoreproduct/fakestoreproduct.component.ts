import { Component, OnInit } from '@angular/core';
import { FakeStoreProduct } from '../../contracts/FakeStoreProduct';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fakestoreproduct',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './fakestoreproduct.component.html',
  styleUrl: './fakestoreproduct.component.css'
})
export class FakestoreproductComponent {
  public Product: FakeStoreProduct = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: '',
    rating : {rate: 0, count: 0}    
  };

  public Count:number = 1;

  public LoadProduct(id: number):void {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=> response.json())
    .then(data=> {
      this.Product = data;
    })
  }

  ngOnInit(): void {
    this.LoadProduct(this.Count);
  }

public NextClick():void {
  this.Count++;
  this.LoadProduct(this.Count);
}

public PreviousClick():void {
  this.Count--;
  this.LoadProduct(this.Count);
}
}
