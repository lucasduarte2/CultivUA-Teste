import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        const token = this.authService.getToken();
        if (token && this.authService.getRoleFromToken(token) === 'admin') {
            return true;
        }
        this.router.navigate(['/not-authorized']);
        return false;
    }
}
