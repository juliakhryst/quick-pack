import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { DataSharingService } from '../../core/services/data-sharing.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'qpac-generated-list',
    templateUrl: './generated-list.component.html',
    styleUrls: ['./generated-list.component.scss']
})
export class GeneratedListComponent implements OnInit {
    @Input() list: any;
    @Output() listUpdate: EventEmitter<any> = new EventEmitter();
    sub: Subscription;
    lang;

    categories$: Observable<any[]>;
    icons = ['scatter_plot', 'fastfood', 'create', 'print', 'waves', 'person', 'add_box', 'phone_iphone'];
    category = '';

    isOpenAddedField = false;
    isCheckedAll = false;

    constructor(public data: DataSharingService, private db: AngularFirestore, private translate: TranslateService) {
        this.lang = this.translate.currentLang;

        this.sub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.lang = event.lang;
        });
    }

    ngOnInit() {
        this.categories$ = this.db.collection('/pack-items-categories').valueChanges();
        this.list.items.forEach(function (element) {
            element.forEach(function (el) {
                Object.assign(el, { selectedColor: '' });
                switch (el.category) {
                    case 'Clothing':
                        return Object.assign(el, { style: 'rgba(0, 0, 153, 0.3)' });
                    case 'Documents':
                        return Object.assign(el, { style: 'rgba(230, 46, 0, 0.3)' });
                    case 'Gadgets':
                        return Object.assign(el, { style: 'rgba(204, 0, 255, 0.3)' });
                    case 'Health':
                        return Object.assign(el, { style: 'rgba(102, 0, 102, 0.3)' });
                    case 'Miscellaneous':
                        return Object.assign(el, { style: 'rgba(230, 46, 0, 0.3)' });
                    case 'Food':
                        return Object.assign(el, { style: 'rgba(204, 0, 204, 0.3)' });
                    case 'To-Dos':
                        return Object.assign(el, { style: 'rgba(230, 0, 115, 0.3)' });
                    case 'Hygiene':
                        return Object.assign(el, { style: 'rgba(0, 45, 179, 0.3)' });
                }
            });
        });
    }

    toggleAll(isChecked): void {
        this.list.items.forEach(listArray => {
            listArray.forEach(item => {
                item.checked = isChecked;
            });
        });

        this.listUpdate.emit(this.list);
    }

    get totalWeight() {
        const weight = this.list.items.reduce((memo, listArray) => {
            return memo + listArray.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.weight;
            }, 0);
        }, 0);

        return parseInt(weight.toFixed(2), 10);
    }

    toggleAddedField(): void {
        this.isOpenAddedField = !this.isOpenAddedField;
    }

    removeById(id, arrayIndex): void {
        this.list.items[arrayIndex] = this.list.items[arrayIndex].filter( item => item.id !== id);
        this.listUpdate.emit(this.list);
    }

    showListService() {
        return this.list.items;
    }

    selecFilter(event) {
        this.category = event.currentTarget.id;
        this.list.items.forEach(el => {
            el.forEach(item => {
                if (item.category === event.currentTarget.id) {
                    item.selectedColor = item.style;
                } else {
                    item.selectedColor = '';
                }
            });
        });

        return this.category;
    }
}

