import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-content-projection',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent implements OnInit {

  public thenBlock:TemplateRef<any> | null = null;
  public blockName:string = "";

  @ViewChild('block1', {static:true}) public block1: TemplateRef<any>|null = null;
  @ViewChild('block2', {static:true}) public block2: TemplateRef<any>|null = null;
  @ViewChild('block3', {static:true}) public block3: TemplateRef<any>|null = null;

  ngOnInit():void {
    this.thenBlock = this.block1;
  }
  public BlockChanged():void {
    switch(this.blockName) {
      case "block1":
        this.thenBlock = this.block1;
        break;
        case "block2":
          this.thenBlock = this.block2;
          break;
          case "block3":
            this.thenBlock = this.block3;
            break;
    }
  }
}
