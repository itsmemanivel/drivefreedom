import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sideBarState: boolean;
  constructor(private sideBar: DataSharingService) { }

  ngOnInit(): void {

    this.sideBar.showSideBar.subscribe((res)=>{
      this.sideBarState = res;
    })

  }

  showSideBar(){

      if(this.sideBarState){
        this.sideBar.toggleSideBar(false);
      } else {
        this.sideBar.toggleSideBar(true);
      }
  }

}
