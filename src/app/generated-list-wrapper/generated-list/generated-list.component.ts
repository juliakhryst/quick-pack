import { DataSharingService } from '../../core/services/data-sharing.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'qpac-generated-list',
  templateUrl: './generated-list.component.html',
  styleUrls: ['./generated-list.component.scss']
})
export class GeneratedListComponent implements OnInit, OnDestroy {
    sub: Subscription;
    listItems = [];
    items;
    leviyMasiv;

    ITEMS = [
        {
            category: 'Clothing',
            id: 1,
            name: 'Bathrobe',
            type: 'Essential',
            weight: 2
        },
        {
            category: 'Clothing',
            id: 2,
            name: 'Bathrobe',
            type: 'Essential',
            weight: 6
        },
        {
            category: 'Clothing',
            id: 3,
            name: 'Belt',
            type: 'Essential',
            weight: 2
        },
        {
            category: 'Clothing',
            id: 4,
            name: 'T-short',
            type: 'Essential',
            weight: 8
        }
    ];
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
        return this.listItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.weight;
        }, 0);
    }
    removeById(id): void {
        for ( this.items of this.listItems ) {
            console.log(this.items);
            this.items = this.items.filter( item => item.id !== id);
            console.log(this.items);
        }


    }
    addNewItem(item): void {
        // only for testing
        this.listItems.push( {
            category: 'Clothing',
            id: this.listItems.length,
            name: item.value,
            type: 'Essential',
            weight: 0
        });
    }
    constructor(public data: DataSharingService) { }
    ngOnInit() {
        this.sub = this.data.packList.pipe(
            take(1),
            tap(data => this.listItems = data),
        ).subscribe();

    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}

