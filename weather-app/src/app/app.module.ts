import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {HomeComponent} from './home.component';
import {PageNotFoundComponent} from './page_not_found.component';
import {WeatherComponent} from './weather.component';
import {WeatherDetailsComponent} from './weather_details.component';
import {SearchComponent} from './search.component';
import {SearchResultComponent} from './search_result.component';
import {ApiService} from './api.service';

const appRoutes: Routes = [
	{path:'', component: HomeComponent},
	{path:'weather/:woeid', component: WeatherDetailsComponent},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
