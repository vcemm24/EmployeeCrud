import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import { employee } from '../view/employemodel';
interface gender{
  value:string;
  viewvalue:string;
}
interface userposition{
  value:string;
  viewvalue:string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public empy:employee={} as employee;
  position:userposition[] = [
    {value:'Angular developer',viewvalue:'Angular developer'},
    {value:'React developer',viewvalue:'React developer'},
    {value:'Java developer',viewvalue:'Java developer'},
  ]
  usergender:gender[] = [
    {value:'male',viewvalue:'male'},
    {value:'female',viewvalue:'female'},
  ]
  public dataid:any;
  public mydata:any;

  constructor(private employeservice:MyserviceService,private Activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('dataid');
    })
    this.employeservice.fetchdata(this.dataid).subscribe((data:any)=>{
      this.empy = data;
      //console.log(data);
    })
    
  }
  updatedata(){
    this.employeservice.update(this.empy,this.dataid)
    .subscribe((data:any)=>{
      alert('data updated successfuly!')
      this.router.navigate(['/view'])
    })
  }
}
