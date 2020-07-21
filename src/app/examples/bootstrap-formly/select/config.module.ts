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
              title: 'Select',
              description: `
              Here are all of the options you have available to you with the
              <code>select</code> type from <code>@ngx-formly/bootstrap</code>
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
