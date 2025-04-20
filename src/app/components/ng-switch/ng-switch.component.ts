import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-ng-switch',
  imports: [
    NgSwitch,
    NgSwitchCase],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent implements OnInit {
  
  public ViewName:string = "View1";

 ngOnInit(): void {
   
 }
 public ChangeView(viewName:string) {
    this.ViewName = viewName;
 }
}
