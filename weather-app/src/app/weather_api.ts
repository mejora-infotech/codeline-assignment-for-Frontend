export interface weather_api {
	consolidated_weather: Array<{applicable_date: string, weather_state_abbr: string, the_temp:number, min_temp:number, max_temp:number}>,
	title: string
}