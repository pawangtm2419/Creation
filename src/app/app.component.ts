import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'qrgenrator';
  form!: FormGroup;
  model!: String;

  ngOnInit() {
    this.form = new FormGroup({
      model: new FormControl('model', Validators.minLength(2))
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
