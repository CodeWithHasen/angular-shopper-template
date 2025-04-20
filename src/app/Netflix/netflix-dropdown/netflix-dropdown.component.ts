import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-netflix-dropdown',
  templateUrl: './netflix-dropdown.component.html',
  styleUrls: ['./netflix-dropdown.component.css']
})
export class NetflixDropdownComponent {
  isOpen = false;

  @ViewChild('dropdownRef') dropdownRef!: ElementRef;
  @Output() signInClick = new EventEmitter<void>(); // 👈 emit sign in click

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:mousedown', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (this.dropdownRef && !this.dropdownRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  handleSignIn() {
    this.signInClick.emit(); // 👈 trigger open signin
    this.isOpen = false;
  }
}
