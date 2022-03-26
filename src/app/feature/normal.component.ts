import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'normal-comp',
  template: '<normal-child-comp *ngIf="ready"></normal-child-comp>',
})
export class NormalComponent {
  ready=false
  constructor(private httpClient:HttpClient) {
     this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(()=>{
       this.ready=true
     })
  }
}
