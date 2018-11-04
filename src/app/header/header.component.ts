import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'qpac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser: any;
  public defaultAvatar = '../../assets/img/default-user-icon.jpg';
  constructor(private user: UserService, private auth: AuthService ) { }

  ngOnInit() {
    this.user.getCurrentUser().then(userInfo => {
      console.log(userInfo);
      this.currentUser = userInfo;
    });
  }

  public doLogout() {
    this.auth.doLogout().then(res => {
      console.log(res);
      console.log('you are logged out');
    });
  }

}
