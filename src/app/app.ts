import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sales } from './sales/sales';
import { Production } from './production/production';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { GetApi } from './get-api/get-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'myapp';
}
