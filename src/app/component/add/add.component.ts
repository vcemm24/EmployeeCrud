import { Component, OnInit } from '@angular/core';
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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
