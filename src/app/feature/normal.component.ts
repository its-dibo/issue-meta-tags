import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'normal-comp',
  template: '',
})
export class NormalComponent implements OnInit {
  constructor(public titleService: Title) {
    this.titleService.setTitle('normal');
  }

  ngOnInit(): void {}
}
