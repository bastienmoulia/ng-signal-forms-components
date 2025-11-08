import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { NgdsfSelect, NgdsfInputCheckbox, NgdsfInputRadio } from 'ng-dynamic-signal-form';

@Component({
  selector: 'app-selection-inputs',
  imports: [JsonPipe, NgdsfSelect, NgdsfInputCheckbox, NgdsfInputRadio],
  templateUrl: './selection-inputs.html',
  styleUrl: './selection-inputs.css',
})
export class SelectionInputs {
  model = signal({
    country: '',
    terms: false,
    newsletter: false,
    gender: '',
    subscription: '',
  });

  demoForm = form(this.model, (p) => {
    required(p.country, { message: 'Please select a country' });
    required(p.terms, { message: 'You must accept the terms' });
  });

  countryField = () => this.demoForm.country();
  termsField = () => this.demoForm.terms();
  newsletterField = () => this.demoForm.newsletter();
  genderField = () => this.demoForm.gender();
}
