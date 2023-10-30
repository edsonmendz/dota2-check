import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchListComponent } from './match-list/match-list.component';
import { CompareMatchesComponent } from './compare-matches/compare-matches.component';
import { TopoComponent } from './topo/topo.component';
import { EsquerdaComponent } from './esquerda/esquerda.component';
import { DireitaComponent } from './direita/direita.component';

import { TempoPipe } from './tempo.pipe.service';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    CompareMatchesComponent,
    TopoComponent,
    EsquerdaComponent,
    DireitaComponent,
    TempoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Certifique-se de incluir esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
