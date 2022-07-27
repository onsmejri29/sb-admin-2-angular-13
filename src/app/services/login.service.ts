import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  get isLoggedIn(){
    return window.localStorage.getItem('loged') === 'true';
  }

  async login(){
    await window.localStorage.setItem('loged','true');
  }  

  async logout(){
    await window.localStorage.setItem('loged','false');
  }
  
  constructor(    
  ) { }
}
