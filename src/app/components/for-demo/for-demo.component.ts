import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-for-demo',
  imports: [NgFor],
  templateUrl: './for-demo.component.html',
  styleUrl: './for-demo.component.css'
})
export class ForDemoComponent implements OnInit {
  public categories:string[] = ["All", "Electronics", "Footwear", "Fashion"];

  ngOnInit():void {

  }

}
