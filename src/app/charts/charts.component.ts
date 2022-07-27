import { Component, OnInit } from '@angular/core';

declare var chart_area_demo:any;
declare var chart_pie_demo:any;
declare var chart_bar_demo:any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    chart_area_demo();
    chart_pie_demo();
    chart_bar_demo();
  }

}
