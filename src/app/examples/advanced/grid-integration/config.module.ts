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
              title: 'Grid',
              description: `
              This demonstrates using
              <code>ag-grid</code> inside of a custom type in order to create an input grid.
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
                {
                  file: 'grid.type.ts',
                },
                {
                  file: 'grid-formly-cell.component.ts',
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
