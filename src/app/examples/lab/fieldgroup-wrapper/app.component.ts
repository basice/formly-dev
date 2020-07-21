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
      key: 'address2',
      wrappers: ['accordion'],
      templateOptions: { label: 'Grunduppgifter och skattesatser' },
      fieldGroup: [
        {
          key: 'address2a',
          wrappers: ['panel'],
          templateOptions: { label: 'Obligatoriska uppgifter' },
          fieldGroup: [
            {
              key: 'town',
              type: 'input',
              templateOptions: {
                required: true,
                type: 'text',
                label: 'Typ som beräkning ska göras på',
              },
            },
            {
              key: 'town2',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Personnummer/Organisationsnummer',
              },
            },
          ],
        },
        {
          key: 'address2b',
          wrappers: ['panel'],
          templateOptions: { label: 'Andra grunduppgifter' },
          fieldGroup: [
            {
              key: 'town',
              type: 'input',
              templateOptions: {
                required: true,
                type: 'text',
                label: 'Pensionsdebiteringskod',
              },
            },
          ],
        },
      ],
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
