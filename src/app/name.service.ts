import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private name = new BehaviorSubject<any>(null);

  constructor() {}
  sendName(String: any) {
    this.name.next(String);
  }
  getName() {
    return this.name.asObservable();
  }
}
