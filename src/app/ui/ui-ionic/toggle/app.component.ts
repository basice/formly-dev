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
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Toggle',
      type: 'toggle',
      templateOptions: {
        label: 'Toggle',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];
}
