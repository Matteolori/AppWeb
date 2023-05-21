import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrazioneComponent } from './Registrazione/registrazione.component';
import { LoginComponent } from './Login/login.component';
import { DipendentiComponent } from './dipendenti/dipendenti.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthenticationGuard], component: DipendentiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
