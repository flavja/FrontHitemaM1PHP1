import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ContinentsService} from '../../services/continents.service';
import {Continent} from '../../models/Continent';

@Component({
  selector: 'app-continent-form',
  templateUrl: './continent-form.component.html',
  styleUrls: ['./continent-form.component.css']
})
export class ContinentFormComponent implements OnInit {

  continentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private continentsServices: ContinentsService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.continentForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  createContinent() {
    const name = this.continentForm.get('name').value;
    const image = this.continentForm.get('image').value;
    this.continentsServices.addNewContinent(new Continent(name, image));
  }
}
