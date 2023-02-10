import { async, ComponentFixture, fakeAsync, getTestBed, inject, TestBed, tick } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule, SocialUser } from 'angularx-social-login';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent}
];

describe('LoginComponent', () => {
  let setHrefSpy: jasmine.Spy;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: { navigate: any; };
  // let socialAuthService = TestBed.inject(SocialAuthService);
  // let socialLoginModule = TestBed.inject(SocialLoginModule);
  const googleLoginOptions = {
    scope: 'profile email',
    plugin_name:'login' //you can use any name here
  }; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserTestingModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ LoginComponent, DashboardComponent ],
      providers: [
        {provide:
        SocialLoginModule
      },{
          provide: SocialAuthService
        },
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '233448583683-4b4vfbv2d2f4fstvkrkvvsdga1ljmn2q.apps.googleusercontent.com',
                  googleLoginOptions 
                )
              }
            ]
          } as SocialAuthServiceConfig,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    

    const badUser = new SocialUser()
    badUser.name = 'Deep Sanghani'
    badUser.email = 'deep.sanghani@accolitedigital.com'
    badUser.id = '117576142462311981391'
    const MockWindow = {
      location: {
        _href: '',
        set href(url: string) { this._href = url },
        get href() { return this._href }
      }
    };

    const authService = TestBed.get(SocialAuthService);
    const authSpy = spyOn(authService, 'signIn').and.returnValue(Promise.resolve(badUser));
    setHrefSpy = spyOnProperty(MockWindow.location, 'href', 'set');
    fixture = TestBed.createComponent(LoginComponent);
    // socialAuthService = TestBed.inject(SocialAuthService);
    // socialLoginModule = TestBed.inject(SocialLoginModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    // socialLoginModule = TestBed.inject(SocialLoginModule);
    expect(component).toBeTruthy();
  });

  it('should sign with google', async(inject([Router], (router: { navigate: any; }) => {

    const myService = TestBed.get(SocialAuthService);
    // const mySpy = spyOn(myService, 'signIn').and.callThrough(); //callThrough()

    spyOn(router, 'navigate');

    expect(myService).toBeDefined();
    // expect(mySpy).toBeDefined();
    // expect(mySpy).toHaveBeenCalledTimes(1); 
    component.nav();
    component.signInHandler();
    expect(router.navigate).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(routes);  
  })));

  it('User selected a non-company email', done => {
    function setup() {
      const component = TestBed.createComponent(LoginComponent);
      return component;
    }
    const component = setup();
    const app = component.debugElement.componentInstance;
    const authService = getTestBed();
    const badUser = new SocialUser();
    badUser.name = 'Deep Sanghani'
  badUser.email = 'deep.sanghani@accolitedigital.com'
    badUser.id = '117576142462311981391'
    app.signInHandler();

    expect(app.spin).toEqual(undefined);

  });
});

// import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
// import { AppComponent } from '../app.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         SocialAuthService
//       ],
//       declarations: [ LoginComponent,
//       DashboardComponent,
//     AppComponent ],
//     providers: [{
//       provide: 'SocialAuthServiceConfig',
//       useValue: {autoLogin: false, providers: [ { id: GoogleLoginProvider.PROVIDER_ID, provider: new GoogleLoginProvider( '233448583683-4b4vfbv2d2f4fstvkrkvvsdga1ljmn2q.apps.googleusercontent.com' )}]},
//     }],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe(":", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const googleLoginOptions = {
    scope: 'profile email',
    plugin_name:'login' //you can use any name here
  }; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserTestingModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ LoginComponent, DashboardComponent ],
      providers: [
        {provide:
        SocialLoginModule
      },{
          provide: SocialAuthService
        },
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '233448583683-4b4vfbv2d2f4fstvkrkvvsdga1ljmn2q.apps.googleusercontent.com',
                  googleLoginOptions 
                )
              }
            ]
          } as SocialAuthServiceConfig,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    // socialAuthService = TestBed.inject(SocialAuthService);
    // socialLoginModule = TestBed.inject(SocialLoginModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  var sinon: { stub: (arg0: any, arg1: string) => { (): any; new(): any; resolves: { (arg0: SocialUser): any; new(): any; }; }; };
  const badUser = new SocialUser()
  badUser.email = 'a...@gmail.com'
    badUser.id = 'id'

    function setupTestBed() {
        const injector = getTestBed();

        return injector.get(SocialAuthService);
      }

     
    function setup() {
      const component = TestBed.createComponent(LoginComponent);
      return component;
    }

      it('User selected a non-company email', done => {

        const component = setup();
        const app = component.debugElement.componentInstance;
        const authService = setupTestBed();

        var post = sinon.stub(authService, "signInHandler").resolves(badUser);
        app.signInWithGoogle();

        expect(app.spin).toEqual(false);
        post.restore();
   
      });


  });