import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { NgdsfInputColor, NgdsfInputFile, NgdsfInputHidden } from 'ng-dynamic-signal-form';

@Component({
  selector: 'app-other-inputs',
  imports: [NgdsfInputColor, NgdsfInputFile, NgdsfInputHidden],
  templateUrl: './other-inputs.html',
  styleUrl: './other-inputs.css',
})
export class OtherInputs {
  model = signal({
    color: '#1976d2',
    file: null as any,
    hiddenValue: 'secret-data',
  });

  demoForm = form(this.model);

  colorField = () => this.demoForm.color();
  fileField = () => this.demoForm.file();
  hiddenValueField = () => this.demoForm.hiddenValue();
}
