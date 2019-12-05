import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit() {
  }


  navigate(){
    this.router.navigate(['/about']),
    this.router.navigate(['/contact']),
    this.router.navigate(['/class'])
  }

  
}
