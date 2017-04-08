import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

   movie = null;

  onMediaItemDelete(mediaItem) {
    console.log(mediaItem.id)
  }
onMediaItemPreview(mediaItem) {
    this.movie = mediaItem;
    console.log('img123',this.movie.images[0]);

  }
  
  onMediaItemClose() {
    this.movie = null;
  }
  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
      images: ["media/firebug.png","media/smalltall.jpg"]
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true,
      images: ["media/smalltall.jpg"]
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false,
      images: ["media/redemption.jpg"]
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true,
      images: ["media/hoopers.jpg"]
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
      images: ["media/happy.jpg"]
    }
  ];
}
