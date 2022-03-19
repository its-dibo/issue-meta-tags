import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'normal-comp',
  template: '',
})
export class NormalComponent implements OnInit {
  constructor(public titleService: Title) {
    this.titleService.setTitle('normal#1');

    // delay 5 seconds
    of('')
      .pipe(delay(5000))
      .subscribe(() => this.titleService.setTitle('normal#2'));
  }

  ngOnInit(): void {}
}
