import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ServerService {
  constructor(private http: HttpClient) {}

  private async request(method: string, url: string, data?: any, params?: any) {
    //const token = await this.oktaAuth.getAccessToken();

    const result = this.http.request(method, url, {
      body: data,
      params: params,
      responseType: "json",
      observe: "body",
      headers: {
        //  Authorization: `Bearer ${token}`
      },
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getInvitado(id) {
    const url = `${environment.serverUrl}/invitado?id=${id}`;
    console.log(url);
    return this.request("GET", `${url}`);
  }
}
