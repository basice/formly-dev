import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExamplesRouterViewerComponent, SharedModule } from '../../../shared';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    SharedModule,
    AppModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExamplesRouterViewerComponent,
        data: {
          examples: [
            {
              title: 'JSON powered',
              description: `
              This is an example of powering a form strictly by JSON. The common use case for this
              would be to persist the form configuration in the database and then send the configuration
              up to power the form. Notice that you can still use most features like <code>expressionProperties</code>
              and <code>validators</code> even in a string form.

              <br/>
              For more advanced cases where javascript is needed (For example bind an observable to select options) a map function can be used to adjust the loaded JSON form.
            `,
              component: AppComponent,
              files: [
                {
                  file: 'app.component.html',
                },
                {
                  file: 'app.component.ts',
                },
                {
                  file: 'user.service.ts',
                },
                {
                  file: 'assets/json-powered/user.json',
                },
                {
                  file: 'assets/json-powered/user-form.json',
                },
                {
                  file: 'assets/json-powered/colors.json',
                },
                {
                  file: 'app.module.ts',
                },
              ],
            },
          ],
        },
      },
    ]),
  ],
  entryComponents: [AppComponent],
})
export class ConfigModule {
}
