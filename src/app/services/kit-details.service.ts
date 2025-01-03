import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KitDetailsService {
  private apiUrl = 'cultivua-laravel-production.up.railway.app/api/kit'; // URL da sua API (ajuste conforme necessário)

  constructor(private http: HttpClient) {}

  // Método para obter os dados do kit (nome, localização)
  getKitDetails(kitId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/details/${kitId}`);
  }
}
