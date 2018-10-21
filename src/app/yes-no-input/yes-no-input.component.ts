import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-yes-no-input',
  templateUrl: './yes-no-input.component.html',
  styleUrls: ['./yes-no-input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YesNoInputComponent),
      multi: true
    }
  ]
})
export class YesNoInputComponent implements ControlValueAccessor {
  onChange: any;
  value: string;
  name: string;
  input: FormControl = new FormControl();

  constructor() {
    this.name = this.uuidv4();
  }

  writeValue(value: any): void {
    this.value = '' + value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.input.valueChanges.subscribe((val) => fn(val));
  }
  registerOnTouched(fn: any): void { }

  valueChange() {
    this.onChange(this.value);
  }

  uuidv4(): string {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

}
