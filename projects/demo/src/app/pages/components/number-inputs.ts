import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { NgdsfInputNumber, NgdsfInputRange } from 'ng-dynamic-signal-form';

@Component({
  selector: 'app-number-inputs',
  imports: [JsonPipe, NgdsfInputNumber, NgdsfInputRange],
  templateUrl: './number-inputs.html',
  styleUrl: './number-inputs.css',
})
export class NumberInputs {
  model = signal({
    age: 0,
    quantity: 1,
    price: 0,
    volume: 50,
    brightness: 75,
  });

  demoForm = form(this.model, (p) => {
    required(p.age, { message: 'Age is required' });
    required(p.quantity, { message: 'Quantity is required' });
  });

  ageField = () => this.demoForm.age();
  quantityField = () => this.demoForm.quantity();
  priceField = () => this.demoForm.price();
  volumeField = () => this.demoForm.volume();
  brightnessField = () => this.demoForm.brightness();
}
