import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  item$: Observable<any>;

  constructor(private afs: AngularFirestore) {
  }

  getList(type, gender, activities) {
    return this.item$ = this.afs.collection('pack-items', ref => ref.where('type', '==', type)).valueChanges();
  }

}
