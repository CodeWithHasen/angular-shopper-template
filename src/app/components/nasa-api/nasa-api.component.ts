import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-nasa-api',
  imports: [NgFor],
  templateUrl: './nasa-api.component.html',
  styleUrl: './nasa-api.component.css'
})
export class NasaApiComponent implements OnInit {

  public marsObject:any = {};

  public GetApiData() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response=> response.json())
    .then(data =>{
      this.marsObject = data;
    })
  }
  ngOnInit(): void {
    this.GetApiData();
  }

}
