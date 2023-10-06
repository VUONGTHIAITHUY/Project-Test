import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggerEventService {
  private _triggerEvent: Subject<any> = new Subject();

  setTriggerEvent() {
    this._triggerEvent.next('sidebar');
  }

  getTriggerEvent$() {
    return this._triggerEvent as Observable<any>;
  }


}
