import { Component, Input } from '@angular/core';
import {ApiService} from './api.service';
import {config} from './config';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {

	@Input('woeid') woeid: string;

	private weather: any = false;

	//observable that gets weather data
	private observ;

	constructor(private api_service: ApiService) {}

	//get weather data using woeid
	ngOnInit() {
		this.observ=this.api_service.getWeather(this.woeid).subscribe((data)=>{
			if(typeof data.consolidated_weather !=='undefined' && Array.isArray(data.consolidated_weather) && data.consolidated_weather.length!=0) {

				this.weather=data;
				
				this.weather.icon_url=config.iconUrl.replace("X", this.weather.consolidated_weather[0].weather_state_abbr);

				this.weather.temperature=Math.floor(this.weather.consolidated_weather[0].the_temp);
				this.weather.min_temp=Math.floor(this.weather.consolidated_weather[0].min_temp);
				this.weather.max_temp=Math.floor(this.weather.consolidated_weather[0].max_temp);
			}
		});
	}

	ngOnDestroy() {
    	this.observ.unsubscribe();
  	}
  
}