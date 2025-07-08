import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales-order',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './sales-order.html',
  styleUrl: './sales-order.css'
})
export class SalesOrder {
  
}
