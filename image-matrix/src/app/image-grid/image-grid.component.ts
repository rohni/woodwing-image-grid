import { Component, OnInit } from '@angular/core';
import { FlickrPhotoService } from '../shared/services/flickr-photo.service';
import { FlickrImage } from '../shared/model/image';
import { Observable } from 'rxjs';

@Component({
  selector: 'image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'],
})
export class ImageGridComponent implements OnInit {
  constructor(private photoService: FlickrPhotoService) {}

  photoList: Observable<FlickrImage[]>;

  ngOnInit() {
    this.photoList = this.photoService.photoList$;
    this.photoService.fetchPhotos();
  }
}
