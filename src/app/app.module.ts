import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoListComponent } from './photo-list/components/photo-list/photo-list.component';;
import { HeaderComponent } from './shared/components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
