import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchListComponent } from './match-list/match-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Certifique-se de incluir esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
