import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private secretKey = '3dc';

  constructor() {}

  setItem(key: string, value: any): void {
    const encryptedValue = this.encrypt(value);
    localStorage.setItem(key, encryptedValue);
  }

  getItem(key: string): any {
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
      return this.decrypt(encryptedValue);
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  private encrypt(value: any): string {
    return CryptoJS.AES.encrypt(
      JSON.stringify(value),
      this.secretKey
    ).toString();
  }

  private decrypt(textToDecrypt: string): any {
    const bytes = CryptoJS.AES.decrypt(textToDecrypt, this.secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  }
}
