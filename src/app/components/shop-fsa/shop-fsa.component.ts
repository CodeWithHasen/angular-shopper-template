import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-shop-fsa',
  imports: [NgFor, NgIf, CommonModule, FormsModule],
  templateUrl: './shop-fsa.component.html',
  styleUrl: './shop-fsa.component.css'
})
export class ShopFsaComponent implements OnInit{
  public Categories:string[] = [];
  public Products:any[] = [];
  public CartItems:any[] = [];
  public CartItemsCount:number = 0;
  public ToggleCart:boolean = false;
  public filteredProducts: any[] = []; 
  public selectedPrice: number = 1200;
  public DeletedItems: any[] = [];


  public LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(categories =>{
      categories.unshift("all");
      this.Categories = categories;
    })
  }

  public LoadProducts(url:string) {
    fetch(url)
    .then(response => response.json())
    .then(products => {
      this.Products = products;
      this.FilterProductsByPrice();;
    });
  }
  ngOnInit(): void {
    this.LoadCategories();
    this.LoadProducts("https://fakestoreapi.com/products");
  }

  public CategoryChanged(category:string):void {
    if(category=="all") {
      this.LoadProducts("https://fakestoreapi.com/products");
    } else {
      this.LoadProducts(`https://fakestoreapi.com/products/category/${category}`);
    }
  }
  public AddToCartClick(id:number):void {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(product=>{
      this.CartItems.push(product);
      alert(`${product.title}\nAdded to Cart`);
      this.GetItemsCount();
    })
  }
  public GetItemsCount():void {
    this.CartItemsCount = this.CartItems.length;
  }
  public ToggleClick():void {
    this.ToggleCart = (this.ToggleCart==false)?true:false;
  }  
  public GetTotalAmount():number {
    return this.CartItems.reduce((total, item) => total + item.price, 0);
  }
  public onPriceChange(event: any): void {
    this.selectedPrice = event.target.value;
    this.FilterProductsByPrice();
  }
  
  public FilterProductsByPrice(): void {
    this.filteredProducts = this.Products.filter(product =>
      product.price <= this.selectedPrice
    );
  }
  public DeleteFromCart(item: any): void {
    const index = this.CartItems.indexOf(item);
    if (index !== -1) {
      this.CartItems.splice(index, 1);
      this.DeletedItems.push(item);
      this.GetItemsCount();
    }
  }     
}
