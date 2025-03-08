import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm: FormGroup;
  
    constructor() {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]), // Validación del email
        password: new FormControl('', [Validators.required, Validators.minLength(6)]) // Validación de password
      });
    }
  
    login() {
      if (this.loginForm.valid) {
        console.log('Formulario válido:', this.loginForm.value);
        // Aquí puedes integrar la lógica para enviar el formulario a tu API
      } else {
        console.log('Formulario inválido');
      }
    }
}
