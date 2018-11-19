import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'qpac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser: any;
  public defaultAvatar = '../../assets/img/default-user-icon.jpg';
  constructor(private user: UserService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.getCurrentUser().then(userInfo => {
      this.currentUser = userInfo;
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
