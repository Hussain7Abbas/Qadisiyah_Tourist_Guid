import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit() {
  }


  navigate(){
    this.router.navigate(['/home'])
  }

}
