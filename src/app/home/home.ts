import { Component, inject, Injector, Input, runInInjectionContext, signal } from '@angular/core';
import {
  email,
  Field,
  form,
  maxLength,
  metadata,
  pattern,
  required,
  submit,
} from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { InputEmail } from 'ng-signal-forms';
import { InputPassword } from 'ng-signal-forms';
import { InputTime } from 'ng-signal-forms';
import { InputDate } from 'ng-signal-forms';
import { Textarea } from 'ng-signal-forms';
import { InputText } from 'ng-signal-forms';
import { FieldParams } from 'ng-signal-forms';

@Component({
  selector: 'app-home',
  imports: [Field, InputText, InputEmail, InputPassword, InputDate, InputTime, Textarea, JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  #injector = inject(Injector);

  loginModel = signal({
    name: '',
    email: '',
    password: '',
    eventDate: '',
    eventTime: '',
    message: '',
  });

  loginParams = signal<{ [key: string]: FieldParams }>({
    name: { label: 'Name', placeholder: 'Enter your name' },
    email: { label: 'Custom Email Label', placeholder: 'Enter your email' },
    password: { label: 'Password', placeholder: 'Enter your password' },
    eventDate: { label: 'Event Date', placeholder: 'Select a date' },
    eventTime: { label: 'Event Time', placeholder: 'Select a time' },
    message: { label: 'Message', placeholder: 'Enter your message', rows: 5 },
  });

  loginForm = form(this.loginModel, (p) => {
    required(p.email, {
      message: 'Email is required',
    });
    email(p.email, { message: 'Enter a valid email address' });
    required(p.password, { message: 'Password is required' });
    pattern(p.password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: 'Password must be at least 8 characters long and contain letters and numbers',
    });
    required(p.eventDate, { message: 'Event date is required' });
    required(p.eventTime, { message: 'Event time is required' });
    required(p.message, { message: 'Message is required' });
    maxLength(p.message, 50, { message: 'Message cannot exceed 50 characters' });
    metadata(p.message, () => ({ label: 'Message2', placeholder: 'Enter your message', rows: 5 }));
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      // Perform login logic here
      const credentials = this.loginModel();
      console.log('Logging in with:', credentials);
      // e.g., await this.authService.login(credentials);
    });
  }

  changeForm() {
    if (this.loginModel().email) {
      this.loginModel.set({
        password: 'newpassword',
        eventDate: '2023-01-01',
        eventTime: '12:00',
        message: 'New message',
      } as any);
    } else {
      this.loginModel.set({
        email: 'newemail@example.com',
        password: 'newpassword',
        eventDate: '2023-01-01',
        eventTime: '12:00',
        message: 'New message',
      } as any);
    }
  }

  requiredForm() {
    runInInjectionContext(this.#injector, () => {
      this.loginForm = form(this.loginModel, (p) => {
        required(p.email, { message: 'Email is required' });
        // ... other validators
      });
    });
    console.log('Updated form with required email:', this.loginForm);
  }
}
