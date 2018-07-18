import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from './api.service';
import {search_api} from './search_api';

@Component({
  selector: 'search_result',
  templateUrl: './search_result.component.html'
})

export class SearchResultComponent {
	private weather_ids: Array<string> = [];

	private keyword: string;

	private result_found: boolean = true;

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
	       this.observ_data=this.api_service.getSearchResult(this.keyword).subscribe((data: search_api[])=>{

	       		this.weather_ids=[];

	       		if(data.length==0) {
	       			this.result_found=false;
	       		}
	       		else {
	       			this.result_found=true;
	       		}
	       		
	       		for(let i=0; i<data.length; i++) {
	       			this.weather_ids.push(data[i].woeid);
	       		}
	       });
	    });		
	}

	ngOnDestroy() {
    	this.observ_data.unsubscribe();
    	this.observ_param.unsubscribe();
  	}
}