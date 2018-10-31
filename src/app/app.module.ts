import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { MatiereService } from './services/matiere.service';
import { AuthComponent } from './auth/auth.component';
import { MatiereViewComponent } from './matiere-view/matiere-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleMatiereComponent } from './single-matiere/single-matiere.component';

const appRoutes: Routes = [
  { path: 'matieres', component: MatiereViewComponent },
  { path: 'matieres/:id', component: SingleMatiereComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: MatiereViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MatiereComponent,
    NavBarComponent,
    AuthComponent,
    MatiereViewComponent,
    SingleMatiereComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MatiereService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
