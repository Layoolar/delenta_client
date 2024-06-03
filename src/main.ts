import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './app/store/appState';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { PostService } from './app/services/post.service';
import { ToastrModule } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { TokenInterceptor } from './app/services/token-interceptor.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Ensure you have routes defined in your app-routing.module.ts
    provideStore(appReducer),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(ToastrModule.forRoot({
      // Custom options here
    })),
    provideStoreDevtools(),
    provideHttpClient(),
    { 
       provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true 
    },
    PostService
  ]
})
  .catch((err) => console.error(err));
