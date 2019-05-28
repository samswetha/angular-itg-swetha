import { Component, Input } from '@angular/core';

@Component({
  selector: 'itg-vehicle',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ITGVehicle  {
  @Input() name: string;
}
