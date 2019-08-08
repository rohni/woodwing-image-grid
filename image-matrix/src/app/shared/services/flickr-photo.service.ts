import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FlickrPhotoData, FlickrPhoto, FlickrImage } from '../model/image';
import { Observable, BehaviorSubject, forkJoin, concat } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlickrPhotoService {
  url = (searchTerm: string, page: number) =>
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a50f8ee89a309c514180ee666742c23e&text=${searchTerm}&extras=description%2Curl_m%2Cowner_name&per_page=500&page=${page}&format=json&nojsoncallback=1`;

  private photoListSubject = new BehaviorSubject([]); // allow us to emit new values from the service
  // publicly exposed is the read-only observable (no subscribers being able to
  // emit values)
  public photoList$: Observable<FlickrImage[]> = this.photoListSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchPhotos = () => {
    // for 1 to 20 call Flickr api, and append photos to our subject, that will
    // be picked up to the subscribers to this.photoList$
    const searchTerm = 'wildlife';
    // line up our requests
    const searches = [...Array(20).keys()].map(i => this.fetchPhotoPage(searchTerm, i + 1));
    // load them up one at a time, so we are not waiting forever for all the
    // requests to complete
    concat(...searches).subscribe((val: FlickrImage[]) => {
      const nextVal = this.photoListSubject.getValue().concat(val);
      this.photoListSubject.next(nextVal);
    });
  };

  fetchPhotoPage = (searchTerm: string, page: number) => {
    return this.http.get(this.url(searchTerm, page)).pipe(
      map((photoData: FlickrPhotoData) => {
        // unmunge the photo data into an FlickrImage
        const photoArray = photoData.photos.photo;
        return photoArray.map(
          (photo: FlickrPhoto): FlickrImage => ({
            id: photo.id,
            title: photo.title,
            description: photo.description._content,
            imageurl: photo.url_m,
          }),
        );
      }),
    );
  };
}
