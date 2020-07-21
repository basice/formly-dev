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
import { FormlyWrapperAccordionComponent, FormlyWrapperPanelComponent } from './custom-wrapper';
import { AccordionModule } from 'ngx-bootstrap/accordion';

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
      wrappers: [
        {
          name: 'accordion',
          component: FormlyWrapperAccordionComponent,
        },
        {
          name: 'panel',
          component: FormlyWrapperPanelComponent,
        },
      ],
    }),
    // Some ngx-bootstrap to implement using formly
    AccordionModule.forRoot(),
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
    FormlyWrapperAccordionComponent,
    FormlyWrapperPanelComponent,
  ],
})
export class AppModule {}
