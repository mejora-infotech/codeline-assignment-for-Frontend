import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {config} from './config';

@Injectable()

export class ApiService {
	constructor(private http : HttpClient) {}

	getWeather(woeid) {
		return this.http.get(config.localApiUrl+'?command=location&woeid='+woeid);
	}
}