import { Component } from '@angular/core';

@Component({
  selector: 'lazy-child-comp',
  template: 'lazy child component works',
})
export class LazyChildComponent {
  constructor() {
    console.log('===> lazy-child: constructor')
  }

}
