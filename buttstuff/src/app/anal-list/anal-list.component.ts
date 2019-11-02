import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-anal-list',
  templateUrl: './anal-list.component.html',
  styleUrls: ['./anal-list.component.css']
})
export class AnalListComponent implements OnInit {
  url: string = "http://localhost:9007/ToDoElyse";
  butts: any;

  constructor(private tdServ: ToDoService) { }

  ngOnInit() {
  }

  getButtStuffs(){
    
    // return this.HttpClient.get(this.url + "/getAll").subscribe(buttList => {
    //   // this.butts.push(buttList);
    // this.butts =buttList;
    // });
    // this.butts = this.tdServ.getAll();
    this.tdServ.getAll().subscribe(butts => {
      this.butts = butts;
    })
      
  }

}
