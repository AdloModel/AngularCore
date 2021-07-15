import { Component, OnInit } from '@angular/core';
import { Example } from './examples';
import { Input } from '@angular/core';

@Component({
  selector: 'examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  @Input() index : number;
  constructor() { }

  ngOnInit(): void {
  }

  @Input() example : Example ;

}
