import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataSenderService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  sendToBankFromCard(obj) {
    const jsonData = JSON.stringify(obj);
    const url = 'http://localhost:2700/cardPayment';
    this.http.post(url, jsonData, this.httpOptions).subscribe();
  }

  sendToBankFromBank(obj) {
    const jsonData = JSON.stringify(obj);
    const url = 'http://localhost:2700/bankPayment';
    this.http.post(url, jsonData, this.httpOptions).subscribe();
  }

  sendToBankRequest(obj) {
    const jsonData = JSON.stringify(obj);
    const url = 'http://localhost:2700/requestPayment';
    this.http.post(url, jsonData, this.httpOptions).subscribe();
  }

  getToken() {
    const url = 'http://localhost:2700/security';
    return this.http.get(url);
  }

  getCardTable() {
    const url = 'http://localhost:2700/cardPayment';
    return this.http.get(url);
  }

  putCardTable(id) {
    const url = 'http://localhost:2700/cardPayment/' + id;
    return this.http.put(url, {'safety': false}).subscribe();
  }

  getRequestTable() {
    const url = 'http://localhost:2700/requestPayment';
    return this.http.get(url);
  }

}
