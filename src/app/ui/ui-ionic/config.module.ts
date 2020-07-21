import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonExampleComponents, CommonExampleConfigs, CommonModule, debugFields } from '../common';

import { AppComponent } from './app.component';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { IonicModule } from '@ionic/angular';

import { DatetimeAppComponent, DatetimeAppModule, DatetimeExampleConfig } from './datetime';
import { RangeAppComponent, RangeAppModule, RangeExampleConfig } from './range';
import { ToggleAppComponent, ToggleAppModule, ToggleExampleConfig } from './toggle';

@NgModule({
  imports: [
    CommonModule,
    FormlyIonicModule,
    DatetimeAppModule,
    RangeAppModule,
    ToggleAppModule,
    IonicModule.forRoot(),

    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        data: {
          debugFields,
          examples: [...CommonExampleConfigs, DatetimeExampleConfig, RangeExampleConfig, ToggleExampleConfig],
        },
      },
    ]),
  ],
  declarations: [AppComponent],
  entryComponents: [
    AppComponent,
    ...CommonExampleComponents,
    DatetimeAppComponent,
    RangeAppComponent,
    ToggleAppComponent,
  ],
})
export class ConfigModule {
  constructor(@Inject(APP_INITIALIZER) appInitialize) {
    // temporary workaround to make ionic working in a child module
    appInitialize[0]();
  }
}
