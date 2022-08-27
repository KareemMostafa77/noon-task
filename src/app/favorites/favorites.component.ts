import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  baseFavoritesUrl:string='';
  favoritesData:any[] = [];
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
    this.getFavorites();
  }

  getFavorites(){
    this.baseFavoritesUrl = this._GeneralService.baseUrl;
    this._GeneralService.getDataFromServer('MobileMainPage/GetHomePage').subscribe(data=>this.favoritesData = data.GetNearestBranche.data);
  }

}
