import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Console } from '../../models/console';

@Injectable()

export class ConsoleService {
endPoint: string = environment.ConsoleEndPoint;
  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Console[]> {
    return this._httpClient.get<Console[]>(this.endPoint);
  }

  getById(id: number): Observable<Console> {
    return this._httpClient.get<Console>(this.endPoint + "/" + id);
  }

  post(console: Console): Observable<Console> {
    return this._httpClient.post<Console>(this.endPoint, console);
  }

  put(console: Console): Observable<Console> {
    return this._httpClient.put<Console>(this.endPoint + "/" + console.id, console)
  }

  delete(console: Console): Observable<Console> {
    return this._httpClient.delete<Console>(this.endPoint + "/" + console.id)
  }
}
