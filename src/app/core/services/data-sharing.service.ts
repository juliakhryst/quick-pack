import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  packList: Observable<any>;
  objWithFilters;

  constructor() { }


}
