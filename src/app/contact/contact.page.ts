import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit() {
  }

navigate(){
  this.router.navigate(['/home'])
}
}
