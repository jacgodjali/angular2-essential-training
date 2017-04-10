import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          if (request.url.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
            var medium;
            if (request.url.indexOf('?') >= 0) {
              medium = request.url.split('=')[1];
              if (medium === 'undefined') medium = '';
            }
            var mediaItems;
            if (medium) {
              mediaItems = this._mediaItems.filter(mediaItem => mediaItem.medium === medium);
            } else {
              mediaItems = this._mediaItems;
            }
            responseOptions = new ResponseOptions({
              body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            mediaItems = this._mediaItems.filter(mediaItem => mediaItem.id === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(mediaItems[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var mediaItem = JSON.parse(request.text().toString());
          mediaItem.id = this._getNewId();
          this._mediaItems.push(mediaItem);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deleteMediaItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deleteMediaItem(id) {
    var mediaItem = this._mediaItems.find(mediaItem => mediaItem.id === id);
    var index = this._mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this._mediaItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._mediaItems.length > 0) {
      return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
    }
  }

  _mediaItems = [
    {
      id: 1,
      name: "Joseph G Hewlett",
      medium: "Business",
      gender: "Male",
      phone: "312-2616132",
      address: "2618 Cecil Street, Chicago, Illinois, Zip: 60601",
      job: "Fashion Designer",
      email: "joeg.hewlett@mitrais.com",
      isFavorite: false
    },
    {
      id: 2,
      name: "Cliffor A Hampton",
      medium: "Relative",
      gender: "Male",
      phone: "305-251-0857",
      address: "3589 Agriculture Lane, Perrine, Florida, Zip: 33157",
      job: "Auditing Clerk",
      email: "cliff@mitrais.com",
      isFavorite: true
    }, {
      id: 3,
      name: "Juana M Smothers",
      medium: "Relative",
      gender: "Female",
      phone: "347-769-2052",
      address: "3668 Diamond Cove, Ashton, Rhode Island, Zip: 22864",
      job: "Electrophysiologist",
      email: "juanam@mitrais.com",
      isFavorite: false
    }, {
      id: 4,
      name: "Victoria W Conway",
      medium: "Relative",
      gender: "Female",
      phone: "814-796-5639",
      address: "2279 Spadafore Drive, Waterford (Erie), Pennsylvania, Zip: 16441",
      job: "Elevator Inspector",
      email: "victoriaw@mitrais.com",
      isFavorite: true
    }, {
      id: 5,
      name: "Kim B Raymond",
      medium: "Business",
      gender: "Female",
      phone: "305-2510857",
      address: "407 Deans Lane, Westbury, New York Zip: 11590",
      job: "Bookkeeping Clerk",
      email: "kimb.raymond@mitrais.com",
      isFavorite: true
    }
  ];
}