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

@NgModule({
  declarations: [
    AppComponent,
    DipendentiComponent,
    TabellaDipendentiComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MatSidenavModule, MatTableModule, MatIconModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
