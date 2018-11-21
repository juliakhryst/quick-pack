import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSharingService } from '../../core/services/data-sharing.service';


@Component({
  selector: 'qpac-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss']
})
export class ListTitleComponent implements OnInit {
  @Input() listTitle: string;
  @Output() titleForList = new EventEmitter<String>();

  name = new FormControl('');

  constructor(public data: DataSharingService) { }

  onKey() {
    this.titleForList.emit(this.name.value);
  }

  ngOnInit() {
    this.name.setValue(this.listTitle);
  }

}
