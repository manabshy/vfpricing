import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vfpricing-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('menuBar') menuBar!: ElementRef<HTMLElement>;

  toggleMenu(): void {
    this.menuBar.nativeElement.classList.toggle('expanded');
  }

}
