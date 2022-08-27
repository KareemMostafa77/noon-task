import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  baseCategoriesUrl:string='';
  categoriesData:any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 100,
    rtl:true,
    slideBy : 'page',
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      760: {
        items: 3
      }
    },
    nav: true
  }

  constructor(public _GeneralService:GeneralService) { }

  ngOnInit(): void {
    this.getads();
  }

  getads(){
    this.baseCategoriesUrl = this._GeneralService.baseUrl;
    this._GeneralService.getDataFromServerByGET('Categories/index').subscribe(data=>this.categoriesData=data)
  }
}
