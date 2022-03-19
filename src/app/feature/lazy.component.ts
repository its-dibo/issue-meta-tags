import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lazy-comp',
  template: '<lazy-child-comp></lazy-child-comp>',
})
export class LazyComponent {
  constructor(public titleService: Title) {
    this.titleService.setTitle('lazy#1');
  }
}
