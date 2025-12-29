import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 private http = inject(HttpClient);
 private router = inject(Router);

  loginUser: any = {
    email: 'chetan@gmail.com',
    password: 'admin',
  }

  onLogin(form:any){
    if(form.value){
    this.http.post('https://feestracking.freeprojectapi.com/api/BatchUser/login',this.loginUser).subscribe({
      next:(res:any)=>{
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      },
      error:(err=>{
        console.error('Error in api');
      })
    })
  }
  }
}
