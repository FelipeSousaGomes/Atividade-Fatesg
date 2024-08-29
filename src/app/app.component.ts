import { Component } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component'; // Importa o componente standalone

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [UserFormComponent] 
})
export class AppComponent {}
