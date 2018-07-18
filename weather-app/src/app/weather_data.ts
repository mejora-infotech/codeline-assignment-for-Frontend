export interface weather_data {
	consolidated_weather: Array<{applicable_date: string, weather_state_abbr: string, the_temp:number, min_temp:number, max_temp:number}>
}