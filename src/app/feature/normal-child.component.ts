import { Component, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'normal-child-comp',
  template: 'normal child component works',
})
export class NormalChildComponent {
  constructor(public titleService: Title) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    this.titleService.setTitle('child');
  }
}
