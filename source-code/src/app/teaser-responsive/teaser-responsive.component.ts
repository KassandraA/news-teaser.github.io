import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TeaserNewsModel } from '../models/teaser.model';

@Component({
  selector: 'app-teaser-responsive',
  templateUrl: './teaser-responsive.component.html',
  styleUrls: ['./teaser-responsive.component.scss'],
})
export class TeaserResponsiveComponent implements AfterContentChecked {
  @Input() newsData: TeaserNewsModel[];

  @ViewChild('wrapper') wrapper: ElementRef;

  currentClass = '';
  totalItems = '';
  windowHeight: number;
  buttonText = 'See all News & Projects';
  redirectUrl = 'https://www.pipelife.com/service/news-and-projects.html';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    this.onResize();
  }

  onResize() {
    this.currentClass = this.getClass();
    this.totalItems = this.getLastItemClass();
  }

  getClass(): string {
    const wrapperSize = this.wrapper?.nativeElement?.offsetWidth;
    this.windowHeight = window.innerHeight;

    return wrapperSize >= 700
      ? 'horizontal'
      : wrapperSize < 700 && wrapperSize >= 350
      ? 'middle'
      : 'vertical';
  }

  getLastItemClass(): string {
    return this.windowHeight < 900 && this.windowHeight >= 700
      ? 'four'
      : this.windowHeight < 700
      ? 'three'
      : '';
  }

  goToArticle(url: string, el: MouseEvent): void {
    window.open(url, '_blank');
    el.stopPropagation();
  }
}
