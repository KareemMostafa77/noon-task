import { Component, OnInit, NgModule } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories : string[] = ['الالكترونيات', 'موبايلات','رجالية','نسائية','المنزل','الجمال و العطور','الاطفال و الالعاب','سوبر ماركت','بيع في نون'];
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    $('.category , .categoriesMenu').off('mouseenter').on('mouseenter',(e)=>{
      $('.categoriesMenu').toggleClass('d-none');
    });
    $('.category , .categoriesMenu').off('mouseleave').on('mouseleave',(e)=>{
      $('.categoriesMenu').toggleClass('d-none');
    });
  }

}
