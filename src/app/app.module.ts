import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './service/apiservice.service';
import { TechnewsComponent } from './technews/technews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechnewsComponent,
    SportsnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
