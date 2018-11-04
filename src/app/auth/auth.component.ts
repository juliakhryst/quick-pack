import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'qpac-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public doFbLogin() {
    this.auth.doFbLogin().then(res => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
  }

  public doGoogleLogin() {
    this.auth.doGoogleLogin().then(res => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
  }

  public doAnonymousLogin() {
    this.auth.doAnonymousLogin().then(res => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
  }

}
