import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private weather_ids: Array<string> = ["2344116", "638242", "44418", "565346", "560743", "9807"];
}