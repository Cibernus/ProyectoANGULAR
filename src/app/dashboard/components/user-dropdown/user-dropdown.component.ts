import { Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css'],
})
export class UserDropdownComponent {
  userName: string = 'Abarrotes Reyes';
  isOpen = false;

  constructor(
    private router: Router,
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  // Genera las iniciales del nombre, ej: "Angela López" → "AL"
  getInitials(): string {
    return this.userName
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  onPerfil(): void {
    this.isOpen = false;
    this.router.navigate(['/perfil']);
  }

  onConfig(): void {
    this.isOpen = false;
    this.router.navigate(['/configuracion']);
  }

  onLogout(): void {
    this.isOpen = false;
    this.router.navigate(['/login']);
  }
}
