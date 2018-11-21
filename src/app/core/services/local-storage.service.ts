import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  appPrefix = 'qpack';

  constructor() { }

  setItem(param: string, value: any): void {
    localStorage.setItem(`${this.appPrefix}-${param}`, value);
  }

  setObject(param: string, value: any): void {
    localStorage.setItem(`${this.appPrefix}-${param}`, JSON.stringify(value));
  }

  getItem(param: string): any {
    return localStorage.getItem(`${this.appPrefix}-${param}`);
  }

  getObject(param: string): any {
    return JSON.parse(localStorage.getItem(`${this.appPrefix}-${param}`));
  }

  removeItem(param: string): any {
    localStorage.removeItem(`${this.appPrefix}-${param}`);
  }

  clear(): void {
    localStorage.clear();
  }
}
