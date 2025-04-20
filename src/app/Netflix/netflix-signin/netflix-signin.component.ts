import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-netflix-signin',
  standalone: true,
  imports: [],
  templateUrl: './netflix-signin.component.html',
  styleUrls: ['./netflix-signin.component.css']
})
export class NetflixSigninComponent {
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  signinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Form submitted:', this.signinForm.value);
      this.close.emit(); // Close modal
    }
  }

  onCloseModal() {
    this.close.emit();
  }
}
