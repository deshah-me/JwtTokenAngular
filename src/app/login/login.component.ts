import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  email: any;
  password: any;
  constructor(private builder: FormBuilder, private service: UserService) {
    this.formGroup = this.builder.group({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.email = this.formGroup.get('email')?.value;
    this.password = this.formGroup.get('password')?.value;

    const payload = {
      email: this.email,
      password: this.password,
    };

    console.log(payload);
    this.service.login(payload);
  }
}
