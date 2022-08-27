import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  // base url for apis
  baseUrl:string = 'http://satafood.codesroots.com:3000/';
  // For Requests Header
  headerDict = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin' : '*',
    'lang':'en'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  // Requests Body
  requestBody = {
    googleId  : 'ChIJ88rv8bI_WBQRkvVBLDeZQUg'
  }

  constructor(public _HttpClient:HttpClient) { }

  // function to get data from apis get method
  getDataFromServerByGET(endPoint:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/${endPoint}`,this.requestOptions);
  }

  // function to get data from apis Post Method
  getDataFromServer(endPoint:string):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}api/${endPoint}`,this.requestBody,this.requestOptions);
  }
}
