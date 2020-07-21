import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import {
  FormlyFieldTextDateComponent,
  FormlyFieldTexTimeComponent,
  FormlyFieldTextInputComponent,
  FormlyFieldTextSelectComponent,
} from './custom-types';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [{ name: 'required', message: 'This field is required' }],
      types: [
        {
          name: 'custom-text',
          component: FormlyFieldTextInputComponent,
        },
        {
          name: 'custom-select',
          component: FormlyFieldTextSelectComponent,
        },
        {
          name: 'custom-date',
          component: FormlyFieldTextDateComponent,
        },
        {
          name: 'custom-time',
          component: FormlyFieldTexTimeComponent,
        },
      ],
    }),
    // Some ngx-bootstrap to implement using formly
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgSelectModule,
  ],
  declarations: [
    AppComponent,
    FormlyFieldTextInputComponent,
    FormlyFieldTextSelectComponent,
    FormlyFieldTextDateComponent,
    FormlyFieldTexTimeComponent,
  ],
})
export class AppModule {}
