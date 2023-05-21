import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DipendentiComponent } from './dipendenti/dipendenti.component';
import { TabellaDipendentiComponent } from './tabella-dipendenti/tabella-dipendenti.component';
import { MatButtonModule } from '@angular/material/button';
import { RegistrazioneComponent } from './Registrazione/registrazione.component';
import { LoginComponent } from './Login/login.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationGuard } from './authentication.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DipendenteFormComponent } from './dipendente-form/dipendente-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DipendenteDialogComponent } from './dipendente-dialog/dipendente-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { DipendenteDetailsComponent } from './dipendente-details/dipendente-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DipendentiComponent,
    TabellaDipendentiComponent,
    RegistrazioneComponent,
    LoginComponent,
    DipendenteFormComponent,
    DipendenteDialogComponent,
    DipendenteDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [AuthenticationGuard, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
