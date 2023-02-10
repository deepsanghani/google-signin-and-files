import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FilesComponent } from './files/files.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const googleLoginOptions = {
  scope: 'profile email',
  plugin_name:'login' //you can use any name here
}; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilesComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false},
  },
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '130152155637-3bcm031bivcksf924nrr937cu6i7rts7.apps.googleusercontent.com',
            googleLoginOptions 
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
