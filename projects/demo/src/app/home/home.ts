import { Component, inject, Injector, runInInjectionContext, signal } from '@angular/core';
import { email, form, maxLength, pattern, required, submit } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { NgdsfFormParams, NgdsfFieldType, NgdsfFields } from 'ng-dynamic-signal-form';

@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgdsfFields],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  #injector = inject(Injector);

  model = signal({
    name: '',
    email: '',
    password: '',
    eventDate: '',
    eventTime: '',
    country: '',
    message: '',
  });

  formParams = signal<NgdsfFormParams>({
    name: { type: NgdsfFieldType.InputText, label: 'Name', placeholder: 'Enter your name', className: 'custom-input-class' },
    email: {
      type: NgdsfFieldType.InputEmail,
      label: 'Custom Email Label',
      placeholder: 'Enter your email',
      className: 'email-input',
    },
    password: {
      type: NgdsfFieldType.InputPassword,
      label: 'Password',
      placeholder: 'Enter your password',
    },
    eventDate: {
      type: NgdsfFieldType.InputDate,
      label: 'Event Date',
      placeholder: 'Select a date',
    },
    eventTime: {
      type: NgdsfFieldType.InputTime,
      label: 'Event Time',
      placeholder: 'Select a time',
    },
    country: {
      type: NgdsfFieldType.Select,
      label: 'Country',
      className: 'select-field',
      options: [
        { value: '', label: 'Select a country' },
        { type: 'hr' },
        {
          type: 'optgroup',
          label: 'North America',
          options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'mx', label: 'Mexico' },
          ],
        },
        {
          type: 'optgroup',
          label: 'Europe',
          options: [
            { value: 'uk', label: 'United Kingdom' },
            { value: 'fr', label: 'France' },
            { value: 'de', label: 'Germany' },
            { value: 'es', label: 'Spain', disabled: true },
            { value: 'it', label: 'Italy' },
          ],
        },
        {
          type: 'optgroup',
          label: 'Asia',
          options: [
            { value: 'jp', label: 'Japan' },
            { value: 'cn', label: 'China' },
            { value: 'in', label: 'India' },
          ],
        },
      ],
    },
    message: {
      type: NgdsfFieldType.Textarea,
      label: 'Message',
      placeholder: 'Enter your message',
      rows: 5,
      className: 'textarea-field',
    },
  });

  form = form(this.model, (p) => {
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
    required(p.country, { message: 'Country is required' });
    required(p.message, { message: 'Message is required' });
    maxLength(p.message, 50, { message: 'Message cannot exceed 50 characters' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.form, async () => {
      // Perform login logic here
      const credentials = this.model();
      console.log('Logging in with:', credentials);
      // e.g., await this.authService.login(credentials);
    });
  }

  changeForm() {
    if (this.model().email) {
      this.model.set({
        password: 'newpassword',
        eventDate: '2023-01-01',
        eventTime: '12:00',
        country: 'fr',
        message: 'New message',
      } as any);
    } else {
      this.model.set({
        email: 'newemail@example.com',
        password: 'newpassword',
        eventDate: '2023-01-01',
        eventTime: '12:00',
        country: 'uk',
        message: 'New message',
      } as any);
    }
    if (this.formParams()['message'].label === 'Message') {
      this.formParams.update((params) => ({
        ...params,
        message: {
          ...params['message'],
          label: 'Updated Message Label',
        },
      }));
    } else {
      this.formParams.update((params) => ({
        ...params,
        message: {
          ...params['message'],
          label: 'Message',
        },
      }));
    }
  }

  requiredForm() {
    runInInjectionContext(this.#injector, () => {
      this.form = form(this.model, (p) => {
        required(p.email, { message: 'Email is required' });
        // ... other validators
      });
    });
    console.log('Updated form with required email:', this.form);
  }
}
