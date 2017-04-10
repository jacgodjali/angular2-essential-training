import { Pipe } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe {
  transform(mediaItems) {
    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.medium) <= -1) {
        categories.push(mediaItem.medium);
      }
    });
    return categories.join(', ');
  }
}