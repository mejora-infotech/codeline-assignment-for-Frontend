import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})

export class SearchComponent {

	@Input('keyword') keyword:string;

	constructor(private router: Router) {

	}

	private makeSearch(keyword) {
		if(keyword.trim()!=='') {
			this.router.navigate(['/search', keyword]);
		}		
	}
}