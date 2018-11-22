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
  isLoading = true;

  itemsSub: Observable<any>;
  generatedList: any;
  formatedList: any = {};
  listId: string;

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

    this.listName = `${this.destination} ${this.duration}`;

    this.route.params.subscribe(params => {
      this.listId = params.id;
      // console.log(this.listId);

      if (this.listId) {
        this.user.getCurrentUser().then(userData => {
          const listsArray = this.localStorage.getObject(userData.uid);
          listsArray.forEach(list => {
            if (list.id === Number(this.listId)) {
              this.generatedList = list.items;
              // console.log(this.generatedList);
              this.listName = list.name;
            }
          });
        });
      } else {
        this.itemsSub = this.generationService.getListByParams(this.filterObj);
        this.itemsSub.subscribe(list => {
         // console.log('Get list', list);
          this.isLoading = false;
          this.generatedList = list;
        });
      }
    });
  }

  handleTitleChange(newTitle: string) {
    this.listName = newTitle;
  }

  saveList() {
    this.formatedList.name = this.listName;
    this.formatedList.id = + new Date();
    this.formatedList.items = this.generatedList;


    this.user.getCurrentUser().then(userData => {
      const savedLists = this.localStorage.getObject(userData.uid) || [];
      const listIndex = savedLists.findIndex(list => {
        return list.id === this.formatedList.id;
      });

      if (listIndex > 0) {
        // Edit saved list
        savedLists[listIndex] = this.formatedList;
      } else {
        // Add new list
        savedLists.push(this.formatedList);
      }

      this.localStorage.setObject(userData.uid, savedLists);
      this.router.navigate(['dashboard/my-lists']);
    });

    console.log(this.formatedList);
  }


}
