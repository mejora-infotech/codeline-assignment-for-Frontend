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

	//key press handle in search input
	private handleKeyDown($event) {
		//handle "enter" key pressed
		if ($event.keyCode == 13) {
	       this.makeSearch($event.target.value);
	    }
		
	}

	private makeSearch(keyword) {
		//if keyword not empty then navigate to search page
		if(keyword.trim()!=='') {
			this.router.navigate(['/search', keyword]);
		}		
	}
}