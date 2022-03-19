import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'normal-comp',
  template: '<normal-child-comp></normal-child-comp>',
})
export class NormalComponent {
  constructor(public titleService: Title) {
    this.titleService.setTitle('normal#1');
  }
}
