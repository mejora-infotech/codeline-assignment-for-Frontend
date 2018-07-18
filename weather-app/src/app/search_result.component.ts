import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from './api.service';
import {search}

@Component({
  selector: 'search_result',
  templateUrl: './search_result.component.html'
})

export class SearchResultComponent {
	private weather_ids: Array<string> = [];

	private keyword: string;

	//observable that gets search parameter
	private observ_param;

	//observable that gets api data
	private observ_data;

	constructor(private api_service: ApiService, private route: ActivatedRoute) {}	

	//get weather data using woeid
	ngOnInit() {
		//get woeid from url parameter
		this.observ_param = this.route.params.subscribe(params => {
	       this.keyword = params['keyword'];

	       //get weather data from api
	       this.observ_data=this.api_service.getSearchResult(this.keyword).subscribe((data)=>{
	       		var weather_ids=[];
	       		for(let i=0; i<data.length; i++) {

	       		}

	       		this.weather_ids=data
	       });
	    });		
	}

	ngOnDestroy() {
    	this.observ_data.unsubscribe();
    	this.observ_param.unsubscribe();
  	}
}