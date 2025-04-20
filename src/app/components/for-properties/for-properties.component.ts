import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-for-properties',
  imports: [NgFor],
  templateUrl: './for-properties.component.html',
  styleUrl: './for-properties.component.css'
})
export class ForPropertiesComponent implements OnInit{

  public products:any[] = [
    {Name: "TV", Price: 4600.46},
    {Name: "Mobile", Price: 24500.24},
    {Name: "Shoe", Price: 230.23}
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
  public DeleteClick(index:number):void {
    let flag = confirm("Are you sure?\nwant to Delete?");
    if(flag==true) {
      this.products.splice(index,1);
    }
  }
  public AddMore():void {
    alert("Add Clicked");
    this.products = [
      {Name: "TV", Price: 4600.46},
      {Name: "Mobile", Price: 24500.24},
      {Name: "Shoe", Price: 230.23},
      {Name: "Watch", Price: 500.50}
    ];
  }
  public TrackChange(index:number) {
    return index;
  }
}
