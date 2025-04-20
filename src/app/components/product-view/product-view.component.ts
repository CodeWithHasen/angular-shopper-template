import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-view',
  imports: [NgIf],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  public thenBlock: TemplateRef<any> | null = null;

  @ViewChild("View1", {static:true}) public View1: TemplateRef<any> | null = null;
  @ViewChild("View2", {static:true}) public View2: TemplateRef<any> | null = null;
  @ViewChild("View3", {static:true}) public View3: TemplateRef<any> | null = null;
  @ViewChild("View4", {static:true}) public View4: TemplateRef<any> | null = null;
  @ViewChild("View5", {static:true}) public View5: TemplateRef<any> | null = null;

  ngOnInit():void {
    this.thenBlock = this.View1;
  }
  public MouseOverView(viewName:string) {
    switch(viewName){
      case "View1":
        this.thenBlock = this.View1;
        break;
        case "View2":
        this.thenBlock = this.View2;
        break;
        case "View3":
        this.thenBlock = this.View3;
        break;
        case "View4":
        this.thenBlock = this.View4;
        break;
        case "View5":
        this.thenBlock = this.View5;
        break;
    }
  }

}
