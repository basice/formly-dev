import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExamplesRouterViewerComponent } from '../../shared';
import { CommonExampleComponents, CommonExampleConfigs, CommonModule, debugFields } from '../common';
import { DatepickerAppComponent, DatepickerAppModule, DatepickerExampleConfig } from './datepicker';
import { NativeSelectAppComponent, NativeSelectAppModule, NativeSelectExampleConfig } from './native-select';
import { ToggleAppComponent, ToggleAppModule, ToggleExampleConfig } from './toggle';
import { SliderAppComponent, SliderAppModule, SliderExampleConfig } from './slider';
import { AutocompleteAppComponent, AutocompleteAppModule, AutocompleteExampleConfig } from './autocomplete';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [
    CommonModule,
    FormlyMaterialModule,
    NativeSelectAppModule,
    DatepickerAppModule,
    ToggleAppModule,
    SliderAppModule,
    AutocompleteAppModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExamplesRouterViewerComponent,
        data: {
          debugFields,
          examples: [
            ...CommonExampleConfigs,
            NativeSelectExampleConfig,
            DatepickerExampleConfig,
            ToggleExampleConfig,
            SliderExampleConfig,
            AutocompleteExampleConfig,
          ],
        },
      },
    ]),
  ],
  entryComponents: [
    ...CommonExampleComponents,

    NativeSelectAppComponent,
    DatepickerAppComponent,
    ToggleAppComponent,
    SliderAppComponent,
    AutocompleteAppComponent,
  ],
})
export class ConfigModule {}
