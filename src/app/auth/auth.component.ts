import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'qpac-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  public doFbLogin() {
    this.auth.doFbLogin();
  }

  public doGoogleLogin() {
    this.auth.doGoogleLogin();
  }
}
