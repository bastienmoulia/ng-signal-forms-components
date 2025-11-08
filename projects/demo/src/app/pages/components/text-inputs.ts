import { Component, signal } from '@angular/core';
import { form, required, maxLength, pattern } from '@angular/forms/signals';
import {
  NgdsfInputText,
  NgdsfInputEmail,
  NgdsfInputPassword,
  NgdsfInputSearch,
  NgdsfInputTel,
  NgdsfInputUrl,
  NgdsfTextarea,
} from 'ng-dynamic-signal-form';

@Component({
  selector: 'app-text-inputs',
  imports: [
    NgdsfInputText,
    NgdsfInputEmail,
    NgdsfInputPassword,
    NgdsfInputSearch,
    NgdsfInputTel,
    NgdsfInputUrl,
    NgdsfTextarea,
  ],
  templateUrl: './text-inputs.html',
  styleUrl: './text-inputs.css',
})
export class TextInputs {
  model = signal({
    name: '',
    email: '',
    password: '',
    search: '',
    phone: '',
    website: '',
    message: '',
  });

  demoForm = form(this.model, (p) => {
    required(p.name, { message: 'Name is required' });
    maxLength(p.name, 50, { message: 'Name must be less than 50 characters' });
    required(p.email, { message: 'Email is required' });
    pattern(p.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'Enter a valid email address' });
    required(p.password, { message: 'Password is required' });
    pattern(p.password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: 'Password must be at least 8 characters with letters and numbers',
    });
    pattern(p.phone, /^[\d\s\-+()]*$/, { message: 'Enter a valid phone number' });
    pattern(p.website, /^https?:\/\/.+/, { message: 'URL must start with http:// or https://' });
    maxLength(p.message, 200, { message: 'Message cannot exceed 200 characters' });
  });

  nameField = () => this.demoForm.name();
  emailField = () => this.demoForm.email();
  passwordField = () => this.demoForm.password();
  searchField = () => this.demoForm.search();
  phoneField = () => this.demoForm.phone();
  websiteField = () => this.demoForm.website();
  messageField = () => this.demoForm.message();
}
