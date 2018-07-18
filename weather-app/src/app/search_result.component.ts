import { Component } from '@angular/core';

@Component({
  selector: 'search_result',
  templateUrl: './search_result.component.html'
})

export class SearchResultComponent {
	private weather_ids: Array<string> = [];
}