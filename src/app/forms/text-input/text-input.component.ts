import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const custValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> TextInputComponent),
  multi: true
};

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    custValueProvider 
  ]
})
export class TextInputComponent implements ControlValueAccessor  {

  _value = '';
  propagateChange: any = () => {};
  @Input() label: String;
  @Input() symbols: Number = 10;

  constructor() { }

  writeValue(value: any): void {
    if (value){
      this._value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: ()=> void): void {}
  
  onChange(event){
    this.propagateChange(event.target.value);
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}
