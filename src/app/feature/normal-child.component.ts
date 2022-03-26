import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'normal-child-comp',
  template: 'normal child component works',
})
export class NormalChildComponent {
  constructor() {
    console.log('===> normal-child: constructor')
  }

}
