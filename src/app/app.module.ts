import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent }         from './app.component';
import { AuthService }          from './auth.service';
import { ConfigComponent }      from './config/config.component';
import { DownloaderComponent }  from './downloader/downloader.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { UploaderComponent }    from './uploader/uploader.component';

import { httpInterceptorProviders } from './http-interceptors/index';
import { RankingComponent } from './ranking/ranking.component';
import { HomeComponent } from './home/home.component';
import { UiModule } from './ui/ui.module';
import { RankingService } from './ranking/ranking.service';
import { AppRoutingModule } from './app-routing.module';
import { RankingAddComponent } from './ranking-add/ranking-add.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    )
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent,
    HeroesComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,
    RankingComponent,
    HomeComponent,
    RankingAddComponent,
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    RankingService,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
