import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { ShopperIndexComponent } from './shopper-template/shopper-index/shopper-index.component';
// import { DatabindingComponent } from "./components/databinding/databinding.component";
// import { MvvmDemoComponent } from "./components/mvvm-demo/mvvm-demo.component";
// import { IfDemoComponent } from "./components/if-demo/if-demo.component";
// import { ThenElseDemoComponent } from "./components/then-else-demo/then-else-demo.component";
// import { FakestoreproductComponent } from "./components/fakestoreproduct/fakestoreproduct.component";
// import { ContentProjectionComponent } from "./components/content-projection/content-projection.component";
// import { ProductViewComponent } from "./components/product-view/product-view.component";
// import { ThenDemoComponent } from "./components/then-demo/then-demo.component";
// import { NgSwitchComponent } from "./components/ng-switch/ng-switch.component";
// import { ForDemoComponent } from "./components/for-demo/for-demo.component";
// import { NgForDemoComponent } from "./components/ng-for-demo/ng-for-demo.component";
// import { NasaApiComponent } from "./components/nasa-api/nasa-api.component";
   import { ShopFsaComponent } from "./components/shop-fsa/shop-fsa.component";
// import { ForPropertiesComponent } from "./components/for-properties/for-properties.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // ShopperIndexComponent,
    // DatabindingComponent,
    // MvvmDemoComponent,
    // IfDemoComponent,
    // ThenElseDemoComponent,
    // FakestoreproductComponent,
    // ContentProjectionComponent,
    // ProductViewComponent,
    // ThenDemoComponent,
    // NgSwitchComponent,
    // ForDemoComponent,
    // NgForDemoComponent,
    // NasaApiComponent,
       ShopFsaComponent,
    // ForPropertiesComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-shopping';
}
