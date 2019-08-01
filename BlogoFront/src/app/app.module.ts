import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicationRowComponent } from './components/publication-row/publication-row.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NewPublicationComponent } from './components/new-publication/new-publication.component';
import {NgbdModalConfigModule} from './modal/modal-config.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    PublicationRowComponent,
    HeaderComponent,
    NewPublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbdModalConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
