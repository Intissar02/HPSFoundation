import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  galleryItems = [
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 1', description: 'Mentor guiding students through a coding workshop' },
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 2', description: 'Teacher providing one-on-one tutoring to a student' },
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 2', description: 'Group of students engaged in a collaborative learning session' },
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 2', description: 'Mentor explaining a complex concept with interactive materials' },
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 2', description: 'Students participating in a mock business presentation' },
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 2', description: 'Educator sharing career insights with aspiring professionals' },
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 2', description: 'Students participating in a mock science presentation' },
    { src: 'assets/mentoring-HEADER.jpg', alt: 'Image 2', description: 'Students participating in a mock physics presentation' },


  ];

  lightboxOpen: boolean = false;
  lightboxImageSrc: string = '';
  lightboxImageAlt: string = '';
  lightboxImageDescription: string = '';

  openLightbox(src: string, alt: string, description: string) {
    this.lightboxOpen = true;
    this.lightboxImageSrc = src;
    this.lightboxImageAlt = alt;
    this.lightboxImageDescription = description;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.lightboxImageSrc = '';
    this.lightboxImageAlt = '';
    this.lightboxImageDescription = '';
  }
}