import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qpac-generated-list',
  templateUrl: './generated-list.component.html',
  styleUrls: ['./generated-list.component.scss']
})
export class GeneratedListComponent implements OnInit {
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
      return this.ITEMS.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.weight;
      }, 0);
  }
  removeById(id): void {
      this.ITEMS = this.ITEMS.filter( item => item.id !== id);
  }
  addNewItem(item): void {
      // only for testing
    this.ITEMS.push( {
        category: 'Clothing',
        id: this.ITEMS.length,
        name: item.value,
        type: 'Essential',
        weight: 0
    });
  }
  constructor() { }
  ngOnInit() {
  }

}
