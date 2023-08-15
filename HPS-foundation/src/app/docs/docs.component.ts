import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-docs', 
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent { 
  @Input() title: string | undefined;
  @Input() shortDescription: string | undefined;
  @Input() fullDescription: string | undefined;
  @Input() date: string | undefined;

  showFullContent = false;

  articles = [
    {
      title: 'Article 1',
      shortDescription: 'Discover the benefits of interactive learning methods.',
      fullDescription: 'Interactive learning methods have become a significant trend...',
      date: '12/01/2020'
    },
  ];

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
}
