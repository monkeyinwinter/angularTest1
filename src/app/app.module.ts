import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnDestroy } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { MatiereService } from './services/matiere.service';
import { AuthComponent } from './auth/auth.component';
import { MatiereViewComponent } from './matiere-view/matiere-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService} from './services/auth.service';
import { SingleMatiereComponent } from './single-matiere/single-matiere.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { Observable } from 'rxjs/Observable';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { UserService} from './services/user.service';
import { UserListComponent} from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'matieres', canActivate: [AuthGuard], component: MatiereViewComponent },
  { path: 'matieres/:id', canActivate: [AuthGuard], component: SingleMatiereComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditMatiereComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: '', component: MatiereViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MatiereComponent,
    NavBarComponent,
    AuthComponent,
    MatiereViewComponent,
    SingleMatiereComponent,
    FourOhFourComponent,
    EditMatiereComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MatiereService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
