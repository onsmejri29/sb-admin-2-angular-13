import { Component, OnInit } from '@angular/core';
declare var chart_area_demo:any;
declare var chart_pie_demo:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

    chart_area_demo();
    chart_pie_demo();

  }

}
