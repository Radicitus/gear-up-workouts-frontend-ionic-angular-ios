import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiBaseUrl: string = 'http://localhost:4200/api';

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  // STORAGE
  public setUser(key: string, value: any) {
    this.storage.set(key, value);
  }

  public async getUser(key: string) {
    return await this.storage.get(key);
  }

  public async hasUser() {
    return (await this.storage.length()) != 0;
  }

  public async clearUser() {
    return await this.storage.clear();
  }

  // Send request to server
  private sendRequestToApi(endpoint: string): Promise<any> {
    return lastValueFrom(this.http.get(this.apiBaseUrl + endpoint)).then(
      (resp) => {
        console.log('ApiServ: Resp: ', resp);
        return resp;
      },
      (err) => {
        console.log('ApiServ: Err: ', err);
        return err;
      }
    );
  }

  // aboutMe(): Promise<> {
  //   //This line is sending a request to express, which returns a promise with some data. We're then parsing the data
  //   return this.sendRequestToApi("/").then((data) => {
  //     return new ProfileData(data);
  //   });
  // }

  public helloWorld(): Promise<any> {
    return this.sendRequestToApi('/');
  }
}
