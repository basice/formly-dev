import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { PanelWrapperComponent } from './panel-wrapper.component';
import { AccordionWrapperComponent } from './accordion-wrapper.component';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
        { name: 'accordion', component: AccordionWrapperComponent },
      ],
    }),
    AccordionModule.forRoot(),
  ],
  declarations: [AppComponent, PanelWrapperComponent, AccordionWrapperComponent],
})
export class AppModule {}
