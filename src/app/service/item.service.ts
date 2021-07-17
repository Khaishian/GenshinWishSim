import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/Item';

@Injectable({providedIn: 'root'})
export class ItemService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiServerUrl}/permanentbanner/10`);
  }

  public getHistory(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiServerUrl}/permanentbanner/history`);
  }

  public getPrimogems(): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/permanentbanner/primogems`);
  }

  public resetPity(): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/permanentbanner/reset`);
  }
}