import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-quantityCounter',
  templateUrl: './quantityCounter.component.html',
  styleUrls: ['./quantityCounter.component.css']
})
export class QuantityCounterComponent implements OnInit{
  @Input() quantity!: number;
  @Output() emitAddRemove: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit() {
  }


  /**
   * Emite true si se agrego
   */
  addItem(){
    this.emitAddRemove.emit(true);
  }

  /**
   * Emite false si se removio
   */
  removeItem(){
    this.emitAddRemove.emit(false);
  }

}
