import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Output() selected: EventEmitter<string>;

  constructor() {
    this.selected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  changeToggle(selected: string){
    this.selected.emit(selected);
  }

}
