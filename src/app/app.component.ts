import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-logo></app-logo>
    <app-navbar></app-navbar>
    <app-tagline-jumbo></app-tagline-jumbo> 
    <app-welcome-block></app-welcome-block>
    <app-impressive-stats></app-impressive-stats>
    <app-wind-jumbo></app-wind-jumbo>
    <app-centralize-block></app-centralize-block>
    <app-industry-specific-block></app-industry-specific-block>
    <app-renewable-jumbo></app-renewable-jumbo>
    <app-flexibility-block></app-flexibility-block>
    <app-energy-icons></app-energy-icons>
    <app-learn-more></app-learn-more>
    <app-footer></app-footer>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "GreenIt-Angular-Responsive";
}
