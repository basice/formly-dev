import { FormlyFieldConfig } from '@ngx-formly/core';
import { InputAppComponent, InputAppModule, InputExampleConfig } from '../common/input';
import { TextareaAppComponent, TextareaAppModule, TextareaExampleConfig } from '../common/textarea';
import { CheckboxAppComponent, CheckboxAppModule, CheckboxExampleConfig } from '../common/checkbox';
import { RadioAppComponent, RadioAppModule, RadioExampleConfig } from '../common/radio';
import { SelectAppComponent, SelectAppModule, SelectExampleConfig } from '../common/select';

import { CommonModule } from './common.module';

const CommonExampleConfigs = [
  InputExampleConfig,
  TextareaExampleConfig,
  CheckboxExampleConfig,
  RadioExampleConfig,
  SelectExampleConfig,
];

const CommonExampleComponents = [
  InputAppComponent,
  TextareaAppComponent,
  CheckboxAppComponent,
  RadioAppComponent,
  SelectAppComponent,
];

const debugFields: FormlyFieldConfig[] = [
  {
    key: 'templateOptions',
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        key: 'label',
        type: 'input',
        className: 'col-md-6',
        templateOptions: { label: 'label' },
      },
      {
        key: 'hideLabel',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'hideLabel' },
      },
      {
        key: 'required',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'required' },
      },
      {
        key: 'hideRequiredMarker',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'hideRequiredMarker' },
      },
      {
        key: 'description',
        className: 'col-md-6',
        type: 'input',
        templateOptions: { label: 'description' },
      },
    ],
  },
];

export {
  CommonModule,
  CommonExampleConfigs,
  CommonExampleComponents,
  InputAppModule,
  TextareaAppModule,
  CheckboxAppModule,
  RadioAppModule,
  SelectAppModule,
  debugFields,
};
