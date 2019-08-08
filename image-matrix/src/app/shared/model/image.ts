export interface FlickrImage {
  id: string;
  title: string;
  description?: string;
  imageurl: string;
}

export interface FlickrPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: string;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  description: {
    _content: string;
  };
  ownername: string;
  url_m: string;
  height_m: string;
  width_m: string;
}

export interface FlickrPhotoData {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: string;
    photo: FlickrPhoto[];
  };
  stat: string;
}
