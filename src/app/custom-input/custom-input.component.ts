import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  onChange: Function;
  onTouched: Function;
  rate: FormControl = new FormControl();
  name: string;
  constructor() {
    this.name = this.getRandomString();
  }

  writeValue(value: any) {
    this.rate.setValue(value);
  }
  registerOnChange(fn: Function) {
    this.onChange = fn;
    this.rate.valueChanges.subscribe((val) => fn(val));
  }
  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  getRandomString(): string {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }


}
