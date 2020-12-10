import { Component } from '@angular/core';
import { TeaserNewsModel } from './models/teaser.model';
import NewsJson from '../assets/content/news.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weinerberger Pipelife';

  teaserNewsData: TeaserNewsModel[] = NewsJson;
}
