import { Component, OnInit } from '@angular/core';
declare var sb_admin_2:any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sb_admin_2();
  }

}
