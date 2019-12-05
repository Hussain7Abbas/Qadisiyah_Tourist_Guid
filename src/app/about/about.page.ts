import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit() {
  }

  AboutApp(){

    document.getElementById("About-App").style.width = "100%";

  }
  
  AboutDevloper(){

    document.getElementById("About-Devloper").style.width = "100%";

  }
  

  AboutC4i(){

    document.getElementById("About-C4i").style.width = "100%";

  }

  
  CloseTab(){

    document.getElementById("About-App").style.width = "0";
    document.getElementById("About-C4i").style.width = "0";
    document.getElementById("About-Devloper").style.width = "0";
  }




  navigate(){
    this.router.navigate(['/home'])
  }

}
