import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from '@shared';
import { AppComponent } from './app.component';
import { filter, tap } from 'rxjs/operators';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LoadingBarRouterModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'examples' },
      { path: 'guide', loadChildren: () => import('./guides/guides.module').then((m) => m.GuidesModule) },
      { path: 'ui', loadChildren: () => import('./ui/ui.module').then((m) => m.UIModule) },
      { path: 'examples', loadChildren: () => import('./examples/examples.module').then((m) => m.ExamplesModule) },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd),
        tap(() => (document.querySelector('.mat-sidenav-content').scrollTop = 0)),
      )
      .subscribe();
  }
}
