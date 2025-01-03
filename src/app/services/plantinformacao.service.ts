import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantInformacaoService {
  private apiUrl = 'https://cultivua-laravel-production.up.railway.app/api/plant-informacao'; // Atualize com o seu endpoint base.
  private baseUrl = 'https://cultivua-laravel-production.up.railway.app/api';
  constructor(private http: HttpClient) {}

  // Buscar dados da planta pelo ID
  getPlantById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  
  updatePlantImage(userPlantId: string | null, base64Image: string) {
    return this.http.put(`https://cultivua-laravel-production.up.railway.app/api/users_plants/${userPlantId}/update-image`, { image: base64Image });
  }
  
  // Método para obter os dados da planta com base no user_plant_id
  getPlantData(userPlantId: string): Observable<any> {
    return this.http.get<any>(`https://cultivua-laravel-production.up.railway.app/api/planta-info/${userPlantId}`);
  }

  // Método para buscar dados da planta pelo user_plant_id
  getPlantByUserPlantId(userPlantId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/planta-info/${userPlantId}`);
  }

  
}
