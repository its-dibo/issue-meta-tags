import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lazy-child-comp',
  template: 'lazy child component works',
})
export class LazyChildComponent {
  constructor(public titleService: Title) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    this.titleService.setTitle('child');
  }
}
