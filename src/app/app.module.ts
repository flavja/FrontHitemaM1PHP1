import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityFormComponent } from './city/city-form/city-form.component';
import { ContinentFormComponent } from './continent/continent-form/continent-form.component';
import { CountryFormComponent } from './country/country-form/country-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CityFormComponent,
    ContinentFormComponent,
    CountryFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
