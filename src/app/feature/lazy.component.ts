import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lazy-comp',
  template: '',
})
export class LazyComponent implements OnInit {
  constructor(public titleService: Title) {
    this.titleService.setTitle('lazy');
  }

  ngOnInit(): void {}
}
