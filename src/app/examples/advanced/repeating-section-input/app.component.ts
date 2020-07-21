import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { filter, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {
    investmentsCount: 3,
    investments: [],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'investmentsCount',
      type: 'input',
      defaultValue: 3,
      templateOptions: {
        type: 'number',
        label: 'Investments count',
        required: true,
        min: 1,
      },
      hooks: {
        onInit: (field) => {
          return field.formControl.valueChanges.pipe(
            startWith(field.formControl.value),
            filter((v) => v > 0),
            tap((value) => {
              this.model.investments.length = value;
              this.model = {
                ...this.model,
                investmentsCount: value,
              };
            }),
          );
        },
      },
    },
    {
      key: 'investments',
      type: 'repeat',
      fieldArray: {
        type: 'input',
        key: 'investmentName',
        templateOptions: {
          label: 'Name of Investment:',
          required: true,
        },
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
