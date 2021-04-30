import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private showSideBarSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showSideBar = this.showSideBarSubject.asObservable();

  constructor() { }

  toggleSideBar(value:boolean){
    this.showSideBarSubject.next(value);
  }
}
