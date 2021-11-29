import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'DOM-Manipulation';
  @ViewChild('name') name!: ElementRef;
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.name.nativeElement.innerHTML = 'Hi Mohit ! ';
    this.renderer.setStyle(this.name.nativeElement, 'color', 'red');
  }
}
