import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'qpac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser: any;
  public defaultAvatar = '../../assets/img/default-user-icon.jpg';
  public listNumber: number;
  constructor(
    private user: UserService,
    private auth: AuthService,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.user.getCurrentUser().then(userInfo => {
      this.currentUser = userInfo;
      this.listNumber = this.localStorage.getObject(userInfo.uid).length;
    });
  }

  public doLogout() {
    console.log('Do logout');
    this.auth.doLogout().then(res => {
      console.log(res);
      console.log('you are logged out');
      this.router.navigate(['/login']);
    });
  }
}
