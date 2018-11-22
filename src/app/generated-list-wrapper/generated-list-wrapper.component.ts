import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../core/services/data-sharing.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { GenerationService } from '../core/services/generation.service';
import { Observable } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qpac-generated-list-wrapper',
  templateUrl: './generated-list-wrapper.component.html',
  styleUrls: ['./generated-list-wrapper.component.scss']
})
export class GeneratedListWrapperComponent implements OnInit {
  filterObj;
  destination: any;
  duration: any;
  listName: string;

  itemsSub: Observable<any>;
  generatedList: any = {};
  formatedList: any = {};
  listId: string;
  userData: any;

  constructor(
    public data: DataSharingService,
    private router: Router,
    private route: ActivatedRoute,
    private generationService: GenerationService,
    private localStorage: LocalStorageService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.filterObj = this.data.objWithFilters ? this.data.objWithFilters : this.localStorage.getObject('filterObj');
    this.destination = this.filterObj.destination.name;
    this.duration = this.filterObj.duration.from;

    this.route.params.subscribe(params => {
      this.listId = params.id;
      // console.log(this.listId);

      this.user.getCurrentUser().then(userData => {
        this.userData = userData;

        if (this.listId) {
          const listsArray = this.localStorage.getObject(userData.uid);
          listsArray.forEach(list => {
            if (list.id === Number(this.listId)) {
              this.generatedList = list;
              // console.log(this.generatedList);
              this.listName = list.name;
              console.log(this.listName);
            }
          });
        } else {
          this.itemsSub = this.generationService.getListByParams(this.filterObj);
          this.itemsSub.subscribe(list => {
          // console.log('Get list', list);
            this.generatedList.items = list;
            this.listName = `${this.destination} ${this.duration}`;
          });
        }
      });
    });
  }

  handleTitleChange(newTitle: string) {
    this.listName = newTitle;
  }

  saveList(isUpdate?: boolean) {
    this.formatedList.name = this.listName;
    this.formatedList.id = this.generatedList.id ? this.generatedList.id : + new Date();
    this.formatedList.items = this.generatedList.items;

    const savedLists = this.localStorage.getObject(this.userData.uid) || [];
    const listIndex = savedLists.findIndex(savedList => {
      console.log(savedList.id, this.formatedList.id);
      return savedList.id === this.formatedList.id;
    });

    if (listIndex >= 0) {
      // Edit saved list
      savedLists[listIndex] = this.formatedList;
    } else {
      // Add new list
      savedLists.push(this.formatedList);
    }

    this.localStorage.setObject(this.userData.uid, savedLists);

    if (!isUpdate && !this.listId) {
      this.router.navigate(['dashboard/my-lists']);
    }

    console.log(this.formatedList);
  }

  updateList(listArray) {
    this.generatedList = listArray;
    this.saveList(true);
  }


}
