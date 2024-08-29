import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  // Remover ou comentar a linha abaixo
  // styleUrls: ['./user-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styles: [`
    form {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }
  `]
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulário enviado!', this.userForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
