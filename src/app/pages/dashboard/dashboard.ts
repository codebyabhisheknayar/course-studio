import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  userInfo: any;
  router = inject(Router);

  constructor(){
    const localUserData = localStorage.getItem('userInfo');
    if(localUserData != null){
      this.userInfo = JSON.parse(localUserData);
    }
  }

  logout(){
    localStorage.removeItem('userInfo');
    this.router.navigate(['login']);
  }
}
