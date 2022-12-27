import { Component } from '@angular/core';

interface ResultOperation {
  add: number;
  sub: number;
  multiply: number;
  divider: number | string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-s11';

  number1!: number;
  number2!: number;
  add: boolean = false;
  subtract: boolean = false;
  multiply: boolean = false;
  divider: boolean = false;
  resultOperation: ResultOperation = {
    add: 0,
    sub: 0,
    multiply: 0,
    divider: 0,
  };

  result() {
    if (this.number1 == null || this.number2 == null) {
      return alert('Ingrese los numeros');
    }

    this.add && (this.resultOperation.add = this.number1 + this.number2);

    this.subtract && (this.resultOperation.sub = this.number1 - this.number2);
    this.multiply &&
      (this.resultOperation.multiply = this.number1 * this.number2);

    this.divider &&
      (this.resultOperation.divider =
        this.number2 == 0 ? 'infinito' : this.number1 / this.number2);
  }
}
