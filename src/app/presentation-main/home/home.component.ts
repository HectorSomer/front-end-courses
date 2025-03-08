import { Component } from '@angular/core';
import { LoginComponent } from "../../users/presentation/component-logic/login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
