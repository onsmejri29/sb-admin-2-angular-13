import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Demande } from '../models/demande';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataTable:Demande[]=[];
  idTerrain!:any;
  nbDemandes!:any;
  nbApprouver!:any;

  constructor(private service:DashboardService) { }
  
  ngOnInit(): void {
    this.GetAllDemand();
    this.GetNbApprouver();
  }

  Desapprouver(j:Demande){
    this.idTerrain=j.idTerrain;
    Swal.fire({
      title: 'Etes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.Desapprouver(this.idTerrain).subscribe(res=>{
          console.log('res',res)
          Swal.fire({
            icon: 'success',
            title: 'Terrain Désapprouvé !',
            timer: 1500,
            showConfirmButton: false,
          })
          this.GetAllDemand();
        })
      }
    })


  }

  Approuver(j:Demande){
    this.idTerrain=j.idTerrain;
    Swal.fire({
      title: 'Etes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.Approuver(this.idTerrain).subscribe(res=>{
          console.log('res',res)
          Swal.fire({
            icon: 'success',
            title: 'Terrain approuvé avec succès',
            timer: 1500,
            showConfirmButton: false,
          })
          this.GetAllDemand();
        })
      }
    })


  }

  GetAllDemand(){
    this.service.GetAllDemnades().subscribe(res=>{
      this.dataTable=res;
      this.nbDemandes=res.length;
      console.log('datatable',this.dataTable)
      if (this.dataTable.length != 0) {
        setTimeout(() => {
          $('#dataTable').DataTable();
        }, 500);
      }
    })
  }

  GetNbApprouver(){
    this.service.nbApprouver().subscribe(res=>{
      this.nbApprouver=res;
    })
  }

}
