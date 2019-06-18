import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import MD5 from 'md5-es';

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(`${environment.marvelEndpoint}/v1/public/characters?${this.getAuthentication()}`);
  }

  private getAuthentication() {
    const ts = new Date().getTime();
    const hash = MD5.hash(`${ts}${environment.privateKey}${environment.publicKey}`);
    return `ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`;
  }
}
