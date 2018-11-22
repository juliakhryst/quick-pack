import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { DataSharingService } from '../../core/services/data-sharing.service';
import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'qpac-generated-list',
    templateUrl: './generated-list.component.html',
    styleUrls: ['./generated-list.component.scss']
})
export class GeneratedListComponent implements OnInit, OnDestroy {
    @Input() list: any;
    @Output() listUpdate: EventEmitter<any> = new EventEmitter();
    sub: Subscription;
    items;
    lang;

    categories$: Observable<any[]>;
    icons = ['scatter_plot', 'fastfood', 'create', 'print', 'waves', 'person', 'add_box', 'phone_iphone'];
    category = '';

    isOpenAddedField = false;
    isCheckedAll = false;

    toggleAll(isChecked): void {
        this.list.items.forEach(listArray => {
            listArray.forEach(item => {
                item.checked = isChecked;
            });
        });

        this.listUpdate.emit(this.list);
    }
    toggleAddedField(): void {
        this.isOpenAddedField = !this.isOpenAddedField;
    }
    get totalWeight() {
        let weight = 0;
        this.list.items.forEach(listArray => {
            weight += listArray.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.weight;
            }, 0);
        });

        return Number((weight).toFixed(2));
    }
    removeById(id, arrayIndex): void {
        this.list.items[arrayIndex] = this.list.items[arrayIndex].filter( item => item.id !== id);
        this.listUpdate.emit(this.list);
    }
    // addNewItem(item): void {
    //     // only for testing
    //     this.list.items.push( {
    //         category: 'Clothing',
    //         id: this.list.items.length,
    //         name: item.value,
    //         type: 'Essential',
    //         weight: 0
    //     });
    // }
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
        // console.log(this.list);

        // this.sub = this.data.packList.pipe(
        //     take(1),
        //     tap(data => this.list = data),
        // ).subscribe();
    }

    ngOnDestroy(): void {
        // this.sub.unsubscribe();
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

