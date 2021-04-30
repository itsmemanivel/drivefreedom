import { Component, OnInit } from '@angular/core';
import { DataSharingService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DriveFreedom';
  showSideBar: boolean = false;


  constructor(private sideBar: DataSharingService) { }
  

  ngOnInit(): void {

    this.sideBar.showSideBar.subscribe((res)=>{
      this.showSideBar = res;
    });

  }

  sideBarToggle(){

    if(this.showSideBar){
      this.sideBar.toggleSideBar(false);
    } else {
      this.sideBar.toggleSideBar(true);
    }
}

}
