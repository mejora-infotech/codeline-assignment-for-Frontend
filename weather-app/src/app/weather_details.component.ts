import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from './api.service';
import {config} from './config';
import {weather_data} from './weather_data';

@Component({
  selector: 'weather_details',
  templateUrl: './weather_details.component.html'
})
export class WeatherDetailsComponent {

	private weathers: Array<{day_name:string, day_date:Date, icon_url:string, temperature:number, min_temp:number, max_temp:number}> = [];

	private woeid: string = '';

	//observable that gets weather data
	private observ_data;

	//observable that gets weather data
	private observ_param;

	constructor(private api_service: ApiService, private route: ActivatedRoute) {}

	//get weather data using woeid
	ngOnInit() {		
		this.observ_param = this.route.params.subscribe(params => {
	       this.woeid = params['woeid'];

	       this.observ_data=this.api_service.getWeather(this.woeid).subscribe((data: weather_data)=>{
	       	if(typeof data.consolidated_weather !=='undefined' && Array.isArray(data.consolidated_weather) && data.consolidated_weather.length!==0) {

	       		for(let i=0; i<data.consolidated_weather.length; i++) {
	       			this.weathers.push({day_name:'', day_date:null, icon_url:'', temperature:0, min_temp:0, max_temp:0});
	       			//if first data in consolidated weather then set today
	       			if(i==0) {
	       				this.weathers[i].day_name='Today';
	       			}
	       			//if second data in consolidated weather then set tomorrow
	       			else if(i==1) {
	       				this.weathers[i].day_name='Tomorrow';
	       			}
	       			//set week name and date
	       			else {
	       				var applicable_date=new Date(data.consolidated_weather[i].applicable_date);
	       				this.weathers[i].day_date=applicable_date;
	       			}

	       			//set image url of weather icon
	       			this.weathers[i].icon_url=config.iconUrl.replace("X", data.consolidated_weather[0].weather_state_abbr);

	       			this.weathers[i].temperature=Math.floor(data.consolidated_weather[0].the_temp);
	       			this.weathers[i].min_temp=Math.floor(data.consolidated_weather[0].min_temp);
	       			this.weathers[i].max_temp=Math.floor(data.consolidated_weather[0].max_temp);
	       		}  		

	       	}
	       });
	    });		
	}

	ngOnDestroy() {
    	this.observ_data.unsubscribe();
    	this.observ_param.unsubscribe();
  	}
  
}