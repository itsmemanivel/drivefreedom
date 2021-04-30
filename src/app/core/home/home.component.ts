import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  services: any = [
    {value: 'Delivery', viewValue: 'Delivery'},
    {value: 'Shopping Collection', viewValue: 'Shopping Collection'},
    {value: 'Courier', viewValue: 'Courier'},
    {value: 'Furniture', viewValue: 'Furniture'},
    {value: 'Medical', viewValue: 'Medical'},
    {value: 'Tow Truck', viewValue: 'Tow Truck'},
    {value: 'Haulage', viewValue: 'Haulage'},
    {value: 'Passenger', viewValue: 'Passenger'},
    {value: 'Airport Rides', viewValue: 'Airport Rides'},
    {value: 'Moms Taxi', viewValue: 'Moms Taxi'},
    {value: 'Date Night', viewValue: 'Date Night'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
