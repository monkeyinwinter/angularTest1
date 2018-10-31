import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { MatiereService } from './services/matiere.service';

@NgModule({
  declarations: [
    AppComponent,
    MatiereComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MatiereService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
