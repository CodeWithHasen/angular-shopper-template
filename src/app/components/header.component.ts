import { Component } from "@angular/core";

@Component({
    selector : "aap-header",
    template : "<h2>{{title}}</h2><p>Welcome to Online Shopping</p>",
    styles : ["h2{background-color:black; color:white; text-align:center; padding:10px}"]
})
export class HeaderComponent 
{
    public title:string = "Shopper.";
}