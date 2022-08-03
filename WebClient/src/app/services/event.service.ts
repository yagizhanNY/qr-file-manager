import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  itemDeleted = new BehaviorSubject<boolean>(false);

  constructor() { }

  getDeletedEvent() {
    return this.itemDeleted;
  }

  setDeletedEventValue(value: boolean) {
    this.itemDeleted.next(value);
  }
}
