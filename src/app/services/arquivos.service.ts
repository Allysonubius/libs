import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  private readonly baseUrl = environment.nodejs;

  constructor(
    private http: HttpClient
  ) { }

  getEbooksList(): Observable<string[]>{
    const endpoint = `${this.baseUrl}/arquivos`;
    return this.http.get<string[]>(endpoint)
  }
}
