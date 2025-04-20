import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FakeStoreProduct } from '../../contracts/FakeStoreProduct';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-then-demo',
  imports: [NgIf],
  templateUrl: './then-demo.component.html',
  styleUrl: './then-demo.component.css'
})
export class ThenDemoComponent implements OnInit {
  
  public Product:FakeStoreProduct = {
    id: 0,
    title: '',
    price: 0,
    description : '',
    image: ' ',
    rating: {rate: 0, count: 0}
  };

  public LoadProduct():void {
    fetch("https://fakestoreapi.com/products/1")
    .then(response=> response.json())
    .then(data=>{
      this.Product = data;
    })
  }

  public thenBlock:TemplateRef<any> | null = null;

  @ViewChild('preview', {static:true}) public preview:TemplateRef<any> | null = null;
  @ViewChild('details', {static:true}) public details:TemplateRef<any> | null = null;
  @ViewChild('description', {static:true}) public description:TemplateRef<any> | null = null;
  @ViewChild('rating', {static:true}) public rating:TemplateRef<any> | null = null;

  ngOnInit():void {
    this.LoadProduct();
    this.thenBlock = this.preview;
  }
  public ShowDetails(viewName:string){
    switch(viewName){
      case "preview":
        this.thenBlock = this.preview;
        break;
        case "details":
        this.thenBlock = this.details;
        break;
        case "description":
        this.thenBlock = this.description;
        break;
        case "rating":
        this.thenBlock = this.rating;
        break;
    }
  }
}
