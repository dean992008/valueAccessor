import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      firstname: ['', [
        Validators.required
      ]],
      lastname: ['', [
        Validators.required
      ]],
      rate1: [0, []],
      rate2: [2, []],
      rate3: [0, []],
      rate4: [5, []],
      question1: [0, []],
      question2: [0, []]
    });
  }
}
