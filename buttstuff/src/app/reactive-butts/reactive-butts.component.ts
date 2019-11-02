import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-reactive-butts',
  templateUrl: './reactive-butts.component.html',
  styleUrls: ['./reactive-butts.component.css']
})
export class ReactiveButtsComponent implements OnInit {
  buttForm : FormGroup;
  url: string = "http://localhost:9007/ToDoElyse";


  constructor(private tdServ: ToDoService) {


   }

  ngOnInit() { 
    this.buttForm = new FormGroup({
      "title": new FormControl,
      "desc": new FormControl,
      
    });
  }
  submitButts(){
    // this.httpClient.post(this.url + "/add", this.buttForm.value).subscribe(butt => {
    //   console.log(butt)
    // })
    this.tdServ.addTodos(this.buttForm.value);
    
  }

}
