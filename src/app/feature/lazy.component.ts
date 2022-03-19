import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'lazy-comp',
  template: '',
})
export class LazyComponent implements OnInit {
  constructor(public titleService: Title) {
    this.titleService.setTitle('lazy#1');

    // delay 5 seconds
    of('')
      .pipe(delay(5000))
      .subscribe(() => this.titleService.setTitle('lazy#2'));
  }

  ngOnInit(): void {}
}
