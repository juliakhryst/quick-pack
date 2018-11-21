import { DataSharingService } from '../../core/services/data-sharing.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'qpac-generated-list',
  templateUrl: './generated-list.component.html',
  styleUrls: ['./generated-list.component.scss']
})
export class GeneratedListComponent implements OnInit, OnDestroy {
    @Input() list: any;
    sub: Subscription;
    items;

    isOpenAddedField = false;
    isCheckedAll = false;
    uncheckAll(): void {
        this.isCheckedAll = false;
    }
    checkAll(): void {
        this.isCheckedAll = true;
    }
    toggleAddedField(): void {
        this.isOpenAddedField = !this.isOpenAddedField;
    }
    get totalWeight() {
        let weight = 0;
        this.list.forEach(listArray => {
            weight += listArray.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.weight;
            }, 0);
        });

        return Number((weight).toFixed(2));
    }
    removeById(id, arrayIndex): void {
        this.list[arrayIndex] = this.list[arrayIndex].filter( item => item.id !== id);
    }
    addNewItem(item): void {
        // only for testing
        this.list.push( {
            category: 'Clothing',
            id: this.list.length,
            name: item.value,
            type: 'Essential',
            weight: 0
        });
    }
    constructor(public data: DataSharingService) { }

    ngOnInit() {
        console.log(this.list);
        // this.sub = this.data.packList.pipe(
        //     take(1),
        //     tap(data => this.list = data),
        // ).subscribe();
    }

    ngOnDestroy(): void {
        // this.sub.unsubscribe();
    }

}

