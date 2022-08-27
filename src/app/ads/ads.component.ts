import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  baseAdsUrl:string='';
  adsData:any[] = [];
  constructor(public _GeneralService:GeneralService) { }

  ngOnInit(): void {
    this.getads();
  }

  getads(){
    this.baseAdsUrl = this._GeneralService.baseUrl;
    this._GeneralService.getDataFromServer('MobileMainPage/GetMainSliders').subscribe(data=>this.adsData = data[2].AdsSpacesprice)
  }
}
