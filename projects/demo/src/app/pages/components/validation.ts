import { Component, signal } from '@angular/core';
import { form, required, email, minLength } from '@angular/forms/signals';
import {
  NgdsfInputText,
  NgdsfInputEmail,
  NgdsfFieldErrors,
  NgdsfFormErrors,
} from 'ng-dynamic-signal-form';

@Component({
  selector: 'app-validation',
  imports: [NgdsfInputText, NgdsfInputEmail, NgdsfFieldErrors, NgdsfFormErrors],
  templateUrl: './validation.html',
  styleUrl: './validation.css',
})
export class Validation {
  model = signal({
    username: '',
    email: '',
  });

  demoForm = form(this.model, (p) => {
    required(p.username, { message: 'Username is required' });
    minLength(p.username, 3, { message: 'Username must be at least 3 characters' });
    required(p.email, { message: 'Email is required' });
    email(p.email, { message: 'Please enter a valid email address' });
  });

  usernameField = () => this.demoForm.username();
  emailField = () => this.demoForm.email();
}
