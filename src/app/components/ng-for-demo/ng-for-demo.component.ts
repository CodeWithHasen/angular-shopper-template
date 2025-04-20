import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-ng-for-demo',
  imports: [NgFor],
  templateUrl: './ng-for-demo.component.html',
  styleUrl: './ng-for-demo.component.css'
})
export class NgForDemoComponent implements OnInit{

public products:any[] = [
  {Name: "Samsung TV", Price: 4500.45},
  {Name: "Nike Casual", Price: 260.26}
];

public menu:any[] = [
  {Category: "Electronics", Products:["TV", "Mobile"]},
  {Category:"Footwear", Products:["Casuals", "Sneakers", "Boots"]}
];

ngOnInit():void {

}

}
