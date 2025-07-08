
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
username='';
password='';

constructor(private router:Router){}
login(){
  if(this.username==='admin' && this.password==='admin'){
    this.router.navigate(['/dashboard']);
  }
  else{
    alert('Invalid credentials');
  }
}

}
