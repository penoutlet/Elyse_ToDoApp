import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

// @Injectable({
//     providedIn: 'root'
// })
export class ToDoService {
    url: string = "http://localhost:9007/ToDoElyse";

    constructor(private httpClient: HttpClient) {

    }

    getAll(){
        // this.httpClient.get(this.url+"/getAll").subscribe(todos => {
        //     console.log(todos)
        //     return todos;
        // })
        // return this.httpServ.post(this._Url + "addPost.do", post, this.httpOptions).pipe(
        //     map (res => res as any)
        //   )
        return this.httpClient.get(this.url + "/getAll").pipe(
            map (res => res as any)
            )
    }
 
    addTodos(formValue) {
        this.httpClient.post(this.url + "/add", formValue).subscribe(todo => {
            console.log(todo);
        })
    }
}