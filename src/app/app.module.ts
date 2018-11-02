import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnDestroy } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MatiereViewComponent } from './matiere-view/matiere-view.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { SingleMatiereComponent } from './single-matiere/single-matiere.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { UserListComponent} from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService} from './services/auth.service';
import { MatiereService } from './services/matiere.service';
import { UserService} from './services/user.service';

const appRoutes: Routes = [
  { path: 'matieres', canActivate: [AuthGuard], component: MatiereViewComponent },
  { path: 'matieres/:id', canActivate: [AuthGuard], component: SingleMatiereComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditMatiereComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: MatiereViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MatiereComponent,
    MatiereViewComponent,
    SingleMatiereComponent,
    EditMatiereComponent,
    FourOhFourComponent,
    UserListComponent,
    NewUserComponent
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
