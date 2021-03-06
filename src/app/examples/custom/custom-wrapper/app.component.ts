import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'custom-text',
      wrappers: ['accordion', 'panel'],
      templateOptions: {
        label: 'Custom text field',
        description: 'Party description',
        placeholder: 'Custom text placeholder',
        required: true,
      },
    },
    {
      key: 'select',
      type: 'custom-select',
      wrappers: ['accordion'],
      templateOptions: {
        label: 'Custom Select field with ng-select',
        placeholder: 'Custom select placeholder',
        required: true,
        multiple: false, // make true to select multilple options
        options: [
          { label: 'Value 1', value: 1},
          { label: 'Value 2', value: 2}
        ]
      },
    },
    {
      key: 'date',
      type: 'custom-date',
      wrappers: ['accordion'],
      templateOptions: {
        label: 'Custom date field with ngx datepicker',
        placeholder: 'Custom date placeholder',
        required: true,
      },
    },
    {
      key: 'date',
      type: 'custom-time',
      wrappers: ['accordion'],
      templateOptions: {
        label: 'Custom time picker field with ngx timepicker',
        required: true
      },
    }
  ];
  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
