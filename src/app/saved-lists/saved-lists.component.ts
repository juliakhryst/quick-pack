import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../core/services/local-storage.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'qpac-saved-lists',
  templateUrl: './saved-lists.component.html',
  styleUrls: ['./saved-lists.component.scss']
})
export class SavedListsComponent implements OnInit {
  savedLists: any[];

  constructor(
    private localStorage: LocalStorageService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.user.getCurrentUser().then(userData => {
      this.savedLists = this.localStorage.getObject(userData.uid);
    });

  }

}
