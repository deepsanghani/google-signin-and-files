import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialLoginModule } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: SocialAuthService
  ) {
  }

  ngOnInit(): void {
  }

  signInHandler(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      console.log(data);
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/files').then();
    });
  }

  nav() {
    this.router.navigate(['/home']);
}

}
