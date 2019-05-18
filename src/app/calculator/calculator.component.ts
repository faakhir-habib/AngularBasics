import {Component, OnInit} from '@angular/core';

@Component({
  selector : 'app-calculator',
  templateUrl : './calculator.component.html',
  styleUrls : ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit
{

  value1: number;
  value2: number;
  result: number;
  private operation: string;

  ngOnInit()
  {
  }

  calculate(event: Event)
  {
    this.operation = (<HTMLInputElement>event.target).value;

    if (this.value1 == null || this.value2 == null)
    {
      return;
    }
    switch (this.operation)
    {
      case 'add':
        this.result = +this.value1 + +this.value2;
        break;
      case 'subtract':
        this.result = this.value1 - this.value2;
        break;
      case 'multiply':
        this.result = this.value1 * this.value2;
        break;
      case 'divide':
        this.result = this.value1 / this.value2;
        break;
      default:
        break;
    }
  }

  clearInput()
  {
    this.value1 = null;
    this.value2 = null;
    this.result = null;
    this.operation = null;
  }
}
