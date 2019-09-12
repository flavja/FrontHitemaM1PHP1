import { Injectable } from '@angular/core';
import {Continent} from '../models/Continent';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  continents: Continent[] = [];

  constructor(private httpClient: HttpClient) {
    this.getContinents();
  }
  private baseUrl = 'http://localhost:8000';

  addNewContinent(newContinent: Continent) {
  }

  getContinents() {
    return new Promise((resolve, reject) => {
      const uri = this.baseUrl + '/continent';
      console.log(uri);
      this.httpClient.get(uri).subscribe((res) => {
        resolve(res);
      });
    });
  }
}
