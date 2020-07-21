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
              title: 'Json Schema',
              description: `
              Credits: The json-schema implementation is inspired by <a target="_blank" href="https://github.com/rjsf-team/react-jsonschema-form">react-jsonschema-form</a>
            `,
              component: AppComponent,
              debug: false,
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
                  file: 'array.type.ts',
                },
                {
                  file: 'object.type.ts',
                },
                {
                  file: 'multischema.type.ts',
                },
                {
                  file: 'null.type.ts',
                },
                {
                  file: 'assets/json-schema/simple.json',
                },
                {
                  file: 'assets/json-schema/nested.json',
                },
                {
                  file: 'assets/json-schema/arrays.json',
                },
                {
                  file: 'assets/json-schema/numbers.json',
                },
                {
                  file: 'assets/json-schema/references.json',
                },
                {
                  file: 'assets/json-schema/schema_dependencies.json',
                },
                {
                  file: 'assets/json-schema/null_field.json',
                },
                {
                  file: 'assets/json-schema/nullable.json',
                },
                {
                  file: 'assets/json-schema/allOf.json',
                },
                {
                  file: 'assets/json-schema/anyOf.json',
                },
                {
                  file: 'assets/json-schema/oneOf.json',
                },
                {
                  file: 'assets/json-schema/select_alternatives.json',
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
